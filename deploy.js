require('dotenv').config({ path: '.env.local' });
const { NodeSSH } = require('node-ssh');
const { exec } = require('child_process');
const fs = require('fs');
const fsp = fs.promises;
const archiver = require('archiver');

const ssh = new NodeSSH();
const config = {
  host: process.env.DEPLOY_HOST,
  username: process.env.DEPLOY_USER,
  password: process.env.DEPLOY_PASSWORD,
};
const remoteDir = process.env.REMOTE_DIR;

const requiredEnvVars = ['DEPLOY_HOST', 'DEPLOY_USER', 'DEPLOY_PASSWORD', 'REMOTE_DIR'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`Error: ${envVar} is not set in the environment variables.`);
    process.exit(1);
  }
}

const executeCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${command}\n${error}`);
        reject(error);
      } else if (stderr) {
        console.error(`Command stderr: ${stderr}`);
        reject(stderr);
      } else {
        console.log(`Command output: ${stdout}`);
        resolve(stdout);
      }
    });
  });
};

const zipDirectory = (source, out) => {
  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(out);
  return new Promise((resolve, reject) => {
    archive
      .directory(source, false)
      .on('error', err => reject(err))
      .pipe(stream);
    stream.on('close', () => resolve());
    archive.finalize();
  });
};

async function ensureNodeVersion(ssh) {
  try {
    console.log('Checking for nvm installation...');
    const { stdout: nvmCheck } = await ssh.execCommand('command -v nvm');
    if (!nvmCheck) {
      console.log('nvm not found. Installing nvm...');
      await ssh.execCommand('curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash');
      await ssh.execCommand('export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"');
    }

    console.log('Installing Node.js version 20.16.0...');
    const loadNvmCommand = 'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"';
    await ssh.execCommand(`${loadNvmCommand} && nvm install 20.16.0 && nvm use 20.16.0 && nvm alias default 20.16.0`);

    console.log('Node.js version 20.16.0 installed successfully.');
  } catch (error) {
    console.error('Failed to ensure Node.js version 20.16.0:', error);
    throw error;
  }
}

async function ensureUnzipInstalled(ssh) {
  try {
    console.log('Checking for unzip installation...');
    const { stdout: unzipCheck } = await ssh.execCommand('command -v unzip');
    if (!unzipCheck) {
      console.log('unzip not found. Installing unzip...');
      await ssh.execCommand('sudo apt-get update && sudo apt-get install -y unzip');
      console.log('unzip installed successfully.');
    } else {
      console.log('unzip is already installed.');
    }
  } catch (error) {
    console.error('Failed to ensure unzip is installed:', error);
    throw error;
  }
}

async function ensureNpmPackage(ssh, packageName, global = false) {
  try {
    console.log(`Checking if ${packageName} is installed${global ? ' globally' : ''}...`);
    const loadNvmCommand = 'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" && nvm use 20.16.0';
    const checkCommand = global ? `npm list -g ${packageName} --depth=0` : `npm list ${packageName} --depth=0`;
    const { stdout, stderr } = await ssh.execCommand(`${loadNvmCommand} && ${checkCommand}`);
    if (stderr.includes(`${packageName}@`) || stdout.includes(`${packageName}@`)) {
      console.log(`${packageName} is already installed.`);
    } else {
      console.log(`Installing ${packageName}${global ? ' globally' : ''}...`);
      const installCommand = global ? `sudo npm install -g ${packageName}` : `npm install ${packageName}`;
      await ssh.execCommand(`${loadNvmCommand} && ${installCommand}`);
    }
  } catch (error) {
    console.error(`Failed to ensure npm package ${packageName} is installed:`, error);
    throw error;
  }
}

async function deploy() {
  try {
    console.log('Checking local dependencies...');
    // Clean up old build files
    await executeCommand('rm -rf  guruavatar-*');
    await executeCommand('rm -rf  guruavatar_*');

    await executeCommand('npm install');

    console.log('Setting environment variables for build...');
    // Set the NEXT_PUBLIC_STRAPI_API_URL for the build
    // envs starting with  NEXT_PUBLIC_* are replaced during the build:
    process.env.NEXT_PUBLIC_STRAPI_API_URL = 'https://strapi.guruavatar.org/api';

    console.log('Building Next.js project...');
    await executeCommand('npm run build');

    console.log('Zipping .next directory...');
    await zipDirectory('.next', '.next.zip');

    console.log('Connecting to remote server...');
    await ssh.connect({
      ...config,
      tryKeyboard: true
    });

    console.log('Backing up remote directory...');
    const backupCommand = `cp -R ${remoteDir} ${remoteDir}_backup_$(date +%Y%m%d_%H%M%S)`;
    const { stderr: backupStderr } = await ssh.execCommand(backupCommand);
    if (backupStderr) {
      console.error('Backup error:', backupStderr);
    }

    await ensureNodeVersion(ssh);
    await ensureUnzipInstalled(ssh);

    console.log('Ensuring npm is up to date...');
    const loadNvmCommand = 'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" && nvm use 20.16.0';
    await ssh.execCommand(`${loadNvmCommand} && sudo npm install -g npm@latest`);

    await ensureNpmPackage(ssh, 'pm2', true);
    await ensureNpmPackage(ssh, 'next', true);

    console.log('Transferring files...');
    try {
      console.log('Transferring .next.zip...');
      await ssh.putFile('.next.zip', `${remoteDir}/.next.zip`);
      console.log('.next.zip transferred successfully');

      console.log('Transferring package.json...');
      await ssh.putFile('package.json', `${remoteDir}/package.json`);
      console.log('package.json transferred successfully');

      console.log('Transferring package-lock.json...');
      await ssh.putFile('package-lock.json', `${remoteDir}/package-lock.json`);
      console.log('package-lock.json transferred successfully');

      console.log('Transferring ecosystem.config.js...');
      await ssh.putFile('ecosystem.config.js', `${remoteDir}/ecosystem.config.js`);
      console.log('ecosystem.config.js transferred successfully');

      console.log('Transferring next.config.mjs...');
      await ssh.putFile('next.config.mjs', `${remoteDir}/next.config.mjs`);
      console.log('next.config.mjs transferred successfully');

      if (fs.existsSync('./public')) {
        console.log('Zipping public directory...');
        await zipDirectory('public', 'public.zip');
        console.log('Transferring public.zip...');
        await ssh.putFile('public.zip', `${remoteDir}/public.zip`);
        console.log('public.zip transferred successfully');
      }
    } catch (transferError) {
      console.error('File transfer failed:', transferError);
      throw transferError;
    }

    console.log('Checking for changes in package-lock.json...');
    const localPackageLock = await fsp.readFile('package-lock.json', 'utf8');
    const { stdout: remotePackageLock, stderr: remotePackageLockError } = await ssh.execCommand(`cat ${remoteDir}/package-lock.json`);

    if (remotePackageLockError) {
      console.warn('Could not read remote package-lock.json. Assuming it needs to be updated.');
    }

    let reinstallDependencies = false;
    if (localPackageLock !== remotePackageLock) {
      console.log('package-lock.json has changed. Reinstalling dependencies...');
      reinstallDependencies = true;
    } else {
      console.log('package-lock.json is unchanged. Skipping dependency installation.');
    }

    if (reinstallDependencies) {
      console.log('Installing dependencies and setting up the application...');
      const setupCommands = `
        cd ${remoteDir} &&
        unzip -o .next.zip -d .next &&
        rm .next.zip &&
        [ -f public.zip ] && unzip -o public.zip -d public && rm public.zip || true &&
        ${loadNvmCommand} && npm ci --production --verbose
      `;
      const { stdout: setupStdout, stderr: setupStderr } = await ssh.execCommand(setupCommands, { cwd: remoteDir });
      console.log('Setup output:', setupStdout);
      if (setupStderr) {
        console.error('Setup error:', setupStderr);
      }
    } else {
      console.log('Unzipping and replacing .next directory...');
      await ssh.execCommand(`
        cd ${remoteDir} &&
        unzip -o .next.zip -d .next &&
        rm .next.zip &&
               [ -f public.zip ] && unzip -o public.zip -d public && rm public.zip || true
      `);
    }

    console.log('Starting the Next.js application with PM2...');
    const startCommands = `
      export PATH=$PATH:/usr/local/bin:$(npm bin -g) &&
      pm2 stop next-app || true &&
      pm2 delete next-app || true &&
      pm2 start ecosystem.config.js --env production
    `;
    //  pm2 start npm --name "next-app" -- start
    const { stdout: startStdout, stderr: startStderr } = await ssh.execCommand(`${loadNvmCommand} && ${startCommands}`, { cwd: remoteDir });
    console.log('PM2 start output:', startStdout);
    if (startStderr) {
      console.error('PM2 start error:', startStderr);
    }

    console.log('Deployment completed successfully!');
  } catch (error) {
    console.error('Deployment failed:', error);
    if (ssh.isConnected()) {
      console.log('Attempting rollback...');
      try {
        await ssh.execCommand(`rm -rf ${remoteDir} && mv ${remoteDir}_backup_* ${remoteDir}`);
        console.log('Rollback completed.');
      } catch (rollbackError) {
        console.error('Rollback failed:', rollbackError);
      }
    } else {
      console.error('Cannot perform rollback: Not connected to server');
    }
  } finally {
    if (ssh.isConnected()) {
      ssh.dispose();
    }

    // Clean up local zip files
    try {
      if (fs.existsSync('.next.zip')) await fsp.unlink('.next.zip');
      if (fs.existsSync('public.zip')) await fsp.unlink('public.zip');
    } catch (cleanupError) {
      console.error('Error cleaning up local zip files:', cleanupError);
    }
  }
}

// Run the deployment
deploy();
require('dotenv').config({ path: '.env.local' });
const { NodeSSH } = require('node-ssh');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const fsp = fs.promises;
const archiver = require('archiver');

const ssh = new NodeSSH();
const config = {
  host: process.env.DEPLOY_HOST || '68.183.81.151',
  username: process.env.DEPLOY_USER,
  password: process.env.DEPLOY_PASSWORD,
};
const remoteDir = process.env.REMOTE_DIR || '/path/to/remote/directory';

// Validate environment variables
const requiredEnvVars = ['DEPLOY_HOST', 'DEPLOY_USER', 'DEPLOY_PASSWORD', 'REMOTE_DIR'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`Error: ${envVar} is not set in the environment variables.`);
    process.exit(1);
  }
}

// Helper functions
const executeCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error}`);
        reject(error);
        return;
      }
      console.log(`Command output: ${stdout}`);
      resolve(stdout);
    });
  });
};

const zipDirectory = (source, out) => {
  const archive = archiver('zip', { zlib: { level: 9 }});
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

async function deploy() {
  try {
    console.log('Checking dependencies...');
    await executeCommand('npm install');

    console.log('Building Next.js project...');
    await executeCommand('npm run build');

    console.log('Zipping .next directory...');
    await zipDirectory('.next', '.next.zip');

    console.log('Connecting to remote server...');
    await ssh.connect({
      ...config,
      tryKeyboard: true // Allows for interactive authentication if needed
    });

    console.log('Backing up remote directory...');
    await ssh.execCommand(`cp -R ${remoteDir} ${remoteDir}_backup_$(date +%Y%m%d_%H%M%S)`);

    console.log('Transferring files...');
    console.log('Transferring .next.zip...');
    await ssh.putFile('.next.zip', `${remoteDir}/.next.zip`);
    console.log('.next.zip transferred successfully');

    console.log('Transferring package.json...');
    await ssh.putFile('package.json', `${remoteDir}/package.json`);
    console.log('package.json transferred successfully');

    console.log('Transferring package-lock.json...');
    await ssh.putFile('package-lock.json', `${remoteDir}/package-lock.json`);
    console.log('package-lock.json transferred successfully');

    if (fs.existsSync('./public')) {
      console.log('Zipping public directory...');
      await zipDirectory('public', 'public.zip');
      console.log('Transferring public.zip...');
      await ssh.putFile('public.zip', `${remoteDir}/public.zip`);
      console.log('public.zip transferred successfully');
    }

    console.log('Executing remote commands...');
    await ssh.execCommand(`
      cd ${remoteDir} &&
      unzip -o .next.zip -d .next &&
      rm .next.zip &&
      [ -f public.zip ] && unzip -o public.zip -d public && rm public.zip || true &&
      npm install --production
    `);

    console.log('Checking if pm2 is installed...');
    const pm2Check = await ssh.execCommand('command -v pm2');
    if (pm2Check.stderr) {
      console.log('pm2 not found. Installing...');
      await ssh.execCommand('npm install -g pm2');
    }

    await ssh.execCommand(`cd ${remoteDir} && pm2 restart next-app || pm2 start npm --name "next-app" -- start`);
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
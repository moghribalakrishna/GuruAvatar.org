module.exports = {
    apps: [
      {
        name: 'next-app',
        script: 'npm',
        args: 'start',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'development',
          NEXT_PUBLIC_STRAPI_API_URL: 'http://localhost:1337/api'
        },
        env_production: {
          NODE_ENV: 'production',
          NEXT_PUBLIC_STRAPI_API_URL: 'https://strapi.guruavatar.org/api'
        },
      },
    ],
  };

//   •	name: The name of your application in PM2.
//   •	script: The command to start your app. For a Next.js app, this would typically be npm or yarn.
//   •	args: The arguments passed to the script. In this case, it’s start to run the Next.js server.
//   •	instances: The number of instances to run. You can set this to "max" to run one instance per CPU core.
//   •	autorestart: Ensures the app will automatically restart if it crashes.
//   •	watch: If set to true, PM2 will restart the app if files change (not recommended for production).
//   •	max_memory_restart: Restarts the app if it exceeds the specified memory usage.
//   •	env: Environment variables for this app. These will be used in any environment.
//   •	env_production: Environment variables specifically for production mode. These override variables in env when running in production.
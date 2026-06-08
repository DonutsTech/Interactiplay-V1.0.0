module.exports = {
  apps: [
    {
      name: 'interactiplay-api',
      script: 'dist/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      watch: false,
      env_production: {
        NODE_ENV: 'production',
        PORT: 4000,
      },
      error_file: '/var/log/pm2/error.log',
      out_file: '/var/log/pm2/out.log',
    },
  ],
};

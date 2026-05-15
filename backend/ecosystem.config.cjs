module.exports = {
  apps: [
    {
      name: "api",

      script: "./dist/server.js",

      instances: "max",

      exec_mode: "cluster",

      autorestart: true,

      watch: false,

      max_memory_restart: "500M",

      env: {
        NODE_ENV: "production",
        PORT: 4000
      },

      node_args: "--experimental-specifier-resolution=node"
    }
  ]
}

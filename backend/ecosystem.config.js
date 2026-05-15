module.exports = {
  apps : [{
    name: "minha-app",
    script: "./src/index.ts",
    instances: "max", // Ou número de instâncias
    exec_mode: "cluster",
    env: {
      NODE_ENV: "production",
    }
  }]
}

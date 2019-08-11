module.exports = function override(config, env) {
  const WorkerPlugin = require("worker-plugin");
  config.plugins.push(new WorkerPlugin());
  return config;
};

const os = require("os");
const process = require("process");
const sequelize = require("../config/config.mysql");
const SECONDS = 5000;

// Đếm số kết nối
const countConnect = async () => {
  try {
    const numOfConnect = await sequelize.connectionManager.pool.size;
    console.log(`Number of connections: ${numOfConnect}`);
  } catch (error) {
    console.error("Error counting connections:", error);
  }
};

// Kiểm tra quá tải kết nối
const checkOverload = () => {
  setInterval(async () => {
    try {
      const numConnection = await sequelize.connectionManager.pool.size;
      const numCores = os.cpus().length;
      const memoryUse = process.memoryUsage().rss;
      const maxConnections = numCores * 5;

      if (numConnection > maxConnections) {
        console.log(`Connection overload detected!`);
      }
    } catch (error) {
      console.error("Error checking overload:", error);
    }
  }, SECONDS);
};

module.exports = { countConnect, checkOverload };

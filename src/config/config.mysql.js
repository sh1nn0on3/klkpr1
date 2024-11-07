"use strict";

const { Sequelize } = require("sequelize");
const {
  mysql: { host, name, port, username, password, dialect },
} = require("./configs");

const sequelize = new Sequelize(name, username, password, {
  host: host,
  port: port,
  dialect: dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;

const config = {
  mysql: {
    enable: process.env.MYSQL_ENABLE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    name: process.env.MYSQL_DATABASE,
    dialect: process.env.MYSQL_DIALECT,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
  },
};

module.exports = config;

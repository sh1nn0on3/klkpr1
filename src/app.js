const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { checkEnable } = require("./utils/dataUtils");
const configs = require("./config/configs");
const app = express();
// app.use(morgan('dev'));

// setting body parser, cookie parser
// app.use(express.json({ limit: "10kb" }));
// app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// init routes
app.use('', require('./routes'));

// init database connection
if (checkEnable(configs.mysql.enable)) {
  require("./config/config.mysql");
}

module.exports = app;

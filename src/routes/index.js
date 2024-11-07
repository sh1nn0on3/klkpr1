const express = require("express");
const router = express.Router();

router.use("/api/v1/excel", require("./excel"));

module.exports = router;

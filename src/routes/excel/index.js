const express = require("express");
const multer = require("multer");
const excelController = require("../../controllers/excel.controller");

const upload = multer({ dest: "uploads/" }).single("dataset");
const router = express.Router();

router.post("/upload", upload, excelController.upload);

module.exports = router;

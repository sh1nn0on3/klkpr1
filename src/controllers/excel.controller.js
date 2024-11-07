const { successResponse, errorResponse } = require("../utils/response");
const excelService = require("../services/excel.service");

class ExcelController {
  upload = async (req, res) => {
    if (!req.file) {
      return errorResponse(res, "Excel Test Controller");
    }
    const result = await excelService.upload(req.file);
    return successResponse(res, result);
  };
}

module.exports = new ExcelController();

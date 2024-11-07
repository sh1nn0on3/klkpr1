const fs = require("fs");
const csv = require("csv-parser");
const { FIELD_MAPPINGS_CSV } = require("../constants");

class ExcelService {
  upload = async (fileExcel) => {
    console.log("🚀 ~ ExcelService ~ upload= ~ fileExcel:", fileExcel);
    try {
      const data = await this.extractFields(fileExcel.path);
      return { count: data.length };
    } catch (err) {
      console.log("🚀 ~ ExcelService ~ upload= ~ err", err);
      return "Error uploading file";
    }
  };

  extractFields = (filePath) => {
    return new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (data) => {
          // Check if the first column has a value
          const firstColumnKey = Object.keys(FIELD_MAPPINGS_CSV)[0];
          if (!data[firstColumnKey]) {
            return; // Skip this row if the first column is empty
          }

          const extractedData = {};
          for (const [key, value] of Object.entries(FIELD_MAPPINGS_CSV)) {
            extractedData[value] = data[key];
          }
          results.push(extractedData);
        })
        .on("end", () => {
          // Delete file after processing
          fs.unlinkSync(filePath);
          resolve(results);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  };
}

module.exports = new ExcelService();

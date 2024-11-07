const fs = require("fs");
const csv = require("csv-parser");

class ExcelService {
  upload = async (fileExcel) => {
    console.log("🚀 ~ ExcelService ~ upload= ~ fileExcel:", fileExcel);
    try {
      const data = await this.extractFields(fileExcel.path);
      return { dataExcel: data[0] };
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
          // Extract specific fields
          const {
            "OrderID*": orderId,
            "Order Date": orderDate,
            ...otherFields
          } = data;
          results.push({ orderId, orderDate, ...otherFields });
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

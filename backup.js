const mysqldump = require("mysqldump");
const cron = require('node-cron');
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

// Ensure the backups folder exists
if (!fs.existsSync("./backups")) {
  fs.mkdirSync("./backups");
}

// Cấu hình kết nối MySQL và tên file backup
const config = {
  host: process.env.MYSQL_HOST, // Thay bằng host MySQL của bạn
  user: process.env.MYSQL_USERNAME, // Thay bằng username MySQL của bạn
  password: process.env.MYSQL_PASSWORD, // Thay bằng password MySQL của bạn
  database: process.env.MYSQL_DATABASE, // Thay bằng tên database MySQL của bạn
};

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const backupFile = `./backups/${process.env.MYSQL_DATABASE}-${timestamp}.sql`;

// Hàm sao lưu
async function backupDatabase() {
  try {
    // Tạo file backup
    await mysqldump({
      connection: config,
      dumpToFile: backupFile,
    });
    console.log("Database backup completed successfully!");
  } catch (error) {
    console.error("Error during backup:", error);
  }
}

// Chạy hàm sao lưu
// Cron job chạy hằng ngày lúc 00:00
cron.schedule('0 0 * * *', () => {
  console.log('Đang thực hiện sao lưu cơ sở dữ liệu MySQL...');
  backupDatabase();
}, {
  timezone: "Asia/Ho_Chi_Minh" // Đặt timezone nếu cần
});

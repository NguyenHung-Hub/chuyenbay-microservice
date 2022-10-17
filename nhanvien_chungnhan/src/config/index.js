require("dotenv").config();

const { PORT, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } =
    process.env;
module.exports = {
    PORT,
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    SERVER_ERROR: "Internal Server Error",
};

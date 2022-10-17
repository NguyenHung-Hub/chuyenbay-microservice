const mongoose = require("mongoose");
const { DB_USERNAME, DB_PASSWORD, DB_PORT } = require(".");

const connectDB = () => {
    mongoose.connect(
        `mongodb://${DB_USERNAME}:${DB_PASSWORD}@localhost:${DB_PORT}/?authSource=admin`,
        (error) => {
            if (error) {
                console.error("> Connected MongoDB error", error);
            } else {
                console.log("> Connected MongoDB docker");
            }
        }
    );

    //local
    // mongoose.connect(`mongodb://localhost:${DB_PORT}/nhanvienDB`, (error) => {
    //     if (error) {
    //         console.error("> Connected MongoDB Error", error);
    //     } else {
    //         console.log("> Connected MongoDB ");
    //     }
    // });
};

module.exports = connectDB;

const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

const route = require("./routes");
const connectDB = require("./config/connectDB");
const { insertChungNhan, insertNhanVien } = require("./database/initData");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8800;

connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

route(app);

insertChungNhan();
insertNhanVien();

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;

    next(error);
});

app.listen(PORT, () => {
    console.log(`> Server is running ${PORT}`);
});

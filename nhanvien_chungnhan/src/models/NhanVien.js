const mongoose = require("mongoose");

const NhanVien = new mongoose.Schema(
    {
        manv: {
            type: String,
            required: true,
        },
        ten: {
            type: String,
        },
        luong: {
            type: Number,
        },
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model("NhanVien", NhanVien);

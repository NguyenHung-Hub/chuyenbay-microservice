const mongoose = require("mongoose");

const ChungNhan = new mongoose.Schema(
    {
        manv: {
            type: String,
            required: true,
        },
        mamb: {
            type: String,
            required: true,
        },
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model("ChungNhan", ChungNhan);

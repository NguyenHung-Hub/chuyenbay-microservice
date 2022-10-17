const ChungNhan = require("../models/ChungNhan");
const NhanVien = require("../models/NhanVien");
const { chungnhans, nhanviens } = require("./mockupData");

/**
 *
 * Nếu chưa có dữ liệu ChungNhan thì insert
 */
const insertChungNhan = async () => {
    try {
        const result = await ChungNhan.findOne({});
        if (result) {
            return;
        }
    } catch (error) {
        console.log(`Error insert ChungNhan mockup: ${error}`);
    }

    chungnhans.forEach(async (chungnhan) => {
        try {
            const item = new ChungNhan({
                manv: chungnhan.manv,
                mamb: chungnhan.mamb,
            });
            const saved = await item.save();
        } catch (error) {
            console.log(`Error insert ChungNhan mockup: ${error}`);
        }
    });
    console.log(">_ Insert ChungNhan success");
};

/**
 *
 * Nếu chưa có dữ liệu NhanVien thì insert
 */
const insertNhanVien = async () => {
    try {
        const result = await NhanVien.findOne({});
        if (result) {
            return;
        }
    } catch (error) {
        console.log(`Error insert NhanVien mockup: ${error}`);
    }

    nhanviens.forEach(async (nhanvien) => {
        try {
            const item = new NhanVien({
                manv: nhanvien.manv,
                ten: nhanvien.ten,
                luong: nhanvien.luong,
            });
            const saved = await item.save();
        } catch (error) {
            console.log(`Error insert NhanVien mockup: ${error}`);
        }
    });
    console.log(">_ Insert NhanVien success");
};

module.exports = { insertChungNhan, insertNhanVien };

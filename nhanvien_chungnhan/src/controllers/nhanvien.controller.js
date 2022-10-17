const { SERVER_ERROR } = require("../config");
const NhanVien = require("../models/NhanVien");
const responseObject = require("../utils/responseObject");

class NhanVienController {
    /**
     *
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * Tạo nhân viên mới
     */
    async create(req, res, next) {
        try {
            const nhanvien = new NhanVien(req.body);
            const saved = await nhanvien.save();

            const resObj = responseObject(200, "Inserted success", saved);
            res.status(200).json(resObj);
        } catch (error) {
            const resObj = responseObject(500, SERVER_ERROR);
            res.status(500).json(resObj);
        }
    }

    /**
     *
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     *
     */
    async get(req, res, next) {
        let id = req.query.manv;
        let resObj = null;
        console.log(id);

        try {
            if (id) {
                const result = await NhanVien.find({ manv: id });

                if (result.length > 0) {
                    resObj = responseObject(200, "Get success", result);
                } else {
                    resObj = responseObject(404, "Not found");
                }
            } else {
                const result = await NhanVien.find({});
                resObj = responseObject(201, "Get success", result);
            }
            res.status(resObj.status).json(resObj);
        } catch (error) {
            const resObj = responseObject(500, SERVER_ERROR);
            res.status(resObj.status).json(resObj);
            next();
        }
    }

    /**
     *
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     *
     */
    async delete(req, res, next) {
        let resObj = null;

        try {
            let id = req.query.manv;
            const result = await NhanVien.find({ manv: id });
            if (result.length > 0) {
                await NhanVien.deleteOne({ manv: id });
                resObj = responseObject(200, "Deleted success");
            } else {
                resObj = responseObject(404, "Not found");
            }

            res.status(resObj.status).json(resObj);
        } catch (error) {
            const resObj = responseObject(500, SERVER_ERROR);
            res.status(resObj.status).json(resObj);
            next();
        }
    }
}

module.exports = new NhanVienController();

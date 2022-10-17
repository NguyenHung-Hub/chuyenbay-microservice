const { SERVER_ERROR } = require("../config");
const ChungNhan = require("../models/ChungNhan");
const responseObject = require("../utils/responseObject");

class ChungNhanController {
    /**
     *
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * Tạo chứng nhận
     */
    async create(req, res, next) {
        try {
            const chungnhan = new ChungNhan(req.body);
            const saved = await chungnhan.save();
            const resObj = responseObject(200, "Inserted Success", saved);
            res.status(resObj.status).json(saved);
        } catch (error) {
            const resObj = responseObject(200, SERVER_ERROR);
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
     * Lấy chứng nhân theo mã nhân viên hoặc mã máy bay hoặc lấy tất cả
     */
    async get(req, res, next) {
        const { manv, mamb } = req.query;

        try {
            let chungnhan = null;
            let resObj = null;

            if (!manv && !mamb) {
                chungnhan = await ChungNhan.find({});
            } else if (manv && mamb) {
                chungnhan = await ChungNhan.find({
                    manv: req.query.manv,
                    mamb: req.query.mamb,
                });
            } else {
                if (manv) {
                    chungnhan = await ChungNhan.find({
                        manv: req.query.manv,
                    });
                }
                if (mamb) {
                    chungnhan = await ChungNhan.find({
                        mamb: req.query.mamb,
                    });
                }
            }

            if (chungnhan.length > 0) {
                resObj = responseObject(200, "Get success", chungnhan);
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

    /**
     *
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     *
     * Xóa chứng nhận theo mã nhân viên
     */
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const chungnhan = await this.getByID(id);
            let resObj = null;

            if (chungnhan) {
                await ChungNhan.deleteOne({ manv: id });
                resObj = responseObject(200, "Deleted Success");
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

module.exports = new ChungNhanController();

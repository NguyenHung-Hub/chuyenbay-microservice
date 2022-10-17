const nhanVienRoutes = require("./nhanvien.route");
const chungnhanRoutes = require("./chungnhan.route");
const { application } = require("express");

/**
 *
 * @param {application} app
 */
function route(app) {
    app.use("/api/nhanviens", nhanVienRoutes);
    app.use("/api/chungnhans", chungnhanRoutes);
}

module.exports = route;

/**
 *
 * @param {Number} statusCode
 * @param {String} message
 * @param {Array} data
 * @returns
 */
const responseObject = (statusCode = null, message = "", data = null) => ({
    status: statusCode,
    message,
    data,
});

module.exports = responseObject;

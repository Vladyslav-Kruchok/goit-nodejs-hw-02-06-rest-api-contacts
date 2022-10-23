const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const multerUpload = require("./multerUpload");

module.exports = {
    validateBody,
    isValidId,
    authenticate,
    multerUpload,
};
const multer = require("multer");
const path = require("path");
const { pathDirTemp } = require("../config");

const multerConfig = multer.diskStorage({
    destination: pathDirTemp,
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const multerUpload = multer({
    storage: multerConfig
});

module.exports = multerUpload;
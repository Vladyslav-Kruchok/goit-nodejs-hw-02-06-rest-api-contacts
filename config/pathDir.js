const path = require("path");

const pathDirTemp = path.join(__dirname, "..", "temp");
const pathDirAvatarsDestination = path.join(__dirname, "..", "public", "avatars");
const pathDirAvatarDb = path.join("avatars");

module.exports = {
    pathDirTemp,
    pathDirAvatarsDestination,
    pathDirAvatarDb
};
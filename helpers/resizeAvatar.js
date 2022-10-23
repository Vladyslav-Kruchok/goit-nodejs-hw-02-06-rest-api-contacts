const jimp = require("jimp");

const resizeAvatar = (fullPathSource, fullPathDestination) => {
    jimp
        .read(fullPathSource)
        .then(avatar => { 
            return avatar
                .resize(250, 250)
                .write(fullPathDestination)
        })
};

module.exports = resizeAvatar;
const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const updateAvatars = require("./updateAvatars");

module.exports = {
    register,
    login,
    getCurrent,
    logout,
    updateSubscription,
    updateAvatars
};
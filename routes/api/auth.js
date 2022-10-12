const express = require("express");
const authRouter = express.Router();
const ctrl = require("../../controllers");

const { ctrlWrapper } = require("../../helpers");
const { validateBody, isValidId } = require("../../middlewares");

const { authModel } = require("../../models");
//signup
authRouter.post("/register", validateBody(authModel.schemas.registerSchema), ctrlWrapper(ctrl.auth.register));

//signin
authRouter.post("/login", validateBody(authModel.schemas.loginSchema), ctrlWrapper(ctrl.auth.login));

module.exports = authRouter;
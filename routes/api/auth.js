const express = require("express");
const authRouter = express.Router();
const ctrl = require("../../controllers");

const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate } = require("../../middlewares");

const { authModel } = require("../../models");
//signup
authRouter.post("/register", validateBody(authModel.schemas.registerSchema), ctrlWrapper(ctrl.auth.register));

//signin
authRouter.post("/login", validateBody(authModel.schemas.loginSchema), ctrlWrapper(ctrl.auth.login));

authRouter.get("/current", authenticate, ctrlWrapper(ctrl.auth.getCurrent));

authRouter.get("/logout", authenticate, ctrlWrapper(ctrl.auth.logout));

authRouter.patch("/users", authenticate, validateBody(authModel.schemas.updateSubscriptionSchema), ctrlWrapper(ctrl.auth.updateSubscription));

module.exports = authRouter;
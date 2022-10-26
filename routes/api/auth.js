const express = require("express");
const authRouter = express.Router();
const ctrl = require("../../controllers");

const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate, multerUpload } = require("../../middlewares");

const { authModel } = require("../../models");
//signup
authRouter.post("/register", validateBody(authModel.schemas.registerSchema), ctrlWrapper(ctrl.auth.register));
authRouter.get("/verify/:verificationToken", ctrlWrapper(ctrl.auth.verify));
authRouter.post("/verify", validateBody(authModel.schemas.verifyEmailSchema), ctrlWrapper(ctrl.auth.resendVerifyEmail));

//signin
authRouter.post("/login", validateBody(authModel.schemas.loginSchema), ctrlWrapper(ctrl.auth.login));

authRouter.get("/current", authenticate, ctrlWrapper(ctrl.auth.getCurrent));

authRouter.get("/logout", authenticate, ctrlWrapper(ctrl.auth.logout));

authRouter.patch("/users", authenticate, validateBody(authModel.schemas.updateSubscriptionSchema), ctrlWrapper(ctrl.auth.updateSubscription));

//multerUpload.single("avatarURL") - 1 file
//multerUpload.array("avatarURL", 10) - several files as example 10 files or more in a one field
//multerUpload.fields([{"avatarURL", 10}, {"bigAvatarURL", 10}]) - several files as example 20 files in two fields or more...
authRouter.patch("/avatars", authenticate, multerUpload.single("avatarURL"), ctrlWrapper(ctrl.auth.updateAvatars));

module.exports = authRouter;
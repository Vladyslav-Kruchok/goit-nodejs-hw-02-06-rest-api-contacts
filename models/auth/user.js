const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleSaveErrors } = require("../../helpers");

//Model of DB
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: ""
    },
    avatarURL: {
        type: String,
        required: true
    },
    verify: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
        default: ""
    }
}, { versionKey: false, timestamps: true });

userSchema.post("save", handleSaveErrors);

// Joi is check of request's  body
const registerSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required()
});

const verifyEmailSchema = Joi.object({
    email: Joi.string().required(),
});

const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required()
});

const updateSubscriptionSchema = Joi.object({
    subscription: Joi.string().required(),
});


const schemas = {
    registerSchema,
    loginSchema,
    updateSubscriptionSchema,
    verifyEmailSchema
};

const User = model("user", userSchema);

module.exports = {
    User,
    schemas
};
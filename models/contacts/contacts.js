const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleSaveErrors } = require("../../middlewares");

//(542) 451-7038
const telFormat = /^\(\d{3}\)\s\d{3}-\d{4}/;
//as a example restrictions by list, value can be any
const bValue = [true, false];

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Set name for contact"]
    },
    email:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        match: telFormat
    },
    favorite: {
        type: Boolean,
        enum: bValue,
        default: false
    }
}, { versionKey: false, timestamps: true });

//to right show err from server
contactSchema.post("save", handleSaveErrors);

const validateSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().pattern(telFormat).required(),
    favorite: Joi.boolean().valid(...bValue)
});

const validateSchemaFavorite = Joi.object({
    favorite: Joi.boolean().valid(...bValue).required()
});

const schemas = {
    validateSchema,
    validateSchemaFavorite
};

const Contact = model("contact", contactSchema);

module.exports = {
    Contact,
    schemas
};
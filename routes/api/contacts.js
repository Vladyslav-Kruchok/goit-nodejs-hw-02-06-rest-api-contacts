const express = require("express");
const router = express.Router();

const {ctrlWrapper} = require("../../helpers");
const ctrl = require("../../controllers");
const {validateBody, isValidId} = require("../../middlewares");

const { schemas } = require("../../models/contacts");

router.get('/', ctrlWrapper(ctrl.listContacts));

router.get('/:id', isValidId, ctrlWrapper(ctrl.getContactById));

router.post('/',validateBody(schemas.validateSchema), ctrlWrapper(ctrl.addContact));

router.delete('/:id', isValidId, ctrlWrapper(ctrl.removeContact));

router.put('/:id', isValidId, validateBody(schemas.validateSchema), ctrlWrapper(ctrl.updateContact));

router.patch('/:id/favorite', isValidId, validateBody(schemas.validateSchemaFavorite), ctrlWrapper(ctrl.updateContactFavorite));

module.exports = router;
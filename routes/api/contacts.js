const express = require("express");
const contactsRouter = express.Router();

const {ctrlWrapper} = require("../../helpers");
const ctrl = require("../../controllers");
const {validateBody, isValidId} = require("../../middlewares");

const { schemas } = require("../../models/contacts");

contactsRouter.get('/', ctrlWrapper(ctrl.contacts.listContacts));

contactsRouter.get('/:id', isValidId, ctrlWrapper(ctrl.contacts.getContactById));

contactsRouter.post('/',validateBody(schemas.validateSchema), ctrlWrapper(ctrl.contacts.addContact));

contactsRouter.delete('/:id', isValidId, ctrlWrapper(ctrl.contacts.removeContact));

contactsRouter.put('/:id', isValidId, validateBody(schemas.validateSchema), ctrlWrapper(ctrl.contacts.updateContact));

contactsRouter.patch('/:id/favorite', isValidId, validateBody(schemas.validateSchemaFavorite), ctrlWrapper(ctrl.contacts.updateContactFavorite));

module.exports = contactsRouter;
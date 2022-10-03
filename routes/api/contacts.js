const express = require('express');
const router = express.Router();

const {ctrlWrapper} = require("../../helpers");
const ctrl = require("../../controllers");
const {validateBody} = require('../../middlewares');

const { validateSchema } = require("../../sсhemas");

router.get('/', ctrlWrapper(ctrl.listContacts));

router.get('/:id', ctrlWrapper(ctrl.getContactById));

router.post('/', validateBody(validateSchema), ctrlWrapper(ctrl.addContact));

router.delete('/:id', ctrlWrapper(ctrl.removeContact));

router.put('/:id', validateBody(validateSchema), ctrlWrapper(ctrl.updateContact));

module.exports = router;
const { getAll, create, getOne, remove, update } = require('../controllers/family.controller');
const express = require('express');

const familyRouter = express.Router();

familyRouter.route('/ruta')
    .get(getAll)
    .post(create);

familyRouter.route('/ruta/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = familyRouter;
const { getAll, create, getOne, remove, update } = require('../controllers/recipe.controller');
const express = require('express');

const recipeRouter = express.Router();

recipeRouter.route('')
    .get(getAll)
    .post(create);

recipeRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = recipeRouter;
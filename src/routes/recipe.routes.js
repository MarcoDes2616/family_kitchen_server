const { requestRecipe } = require('../controllers/Recipe.controller');
const express = require('express');

const recipeRouter = express.Router();

recipeRouter.route('/request')
    .post(requestRecipe);

// recipeRouter.route('/:id')
//     .get(getOne)
//     .delete(remove)
//     .put(update);

module.exports = recipeRouter;
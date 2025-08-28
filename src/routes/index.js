const express = require('express');
const familyRouter = require('./family.routes');
const userRouter = require('./user.routes');
const recipeRouter = require('./recipe.routes');
const systemRouter = require('./system.routes');
const router = express.Router();

// colocar las rutas aquí
// router.use("/families", familyRouter);
router.use("/system", systemRouter);
router.use("/users", userRouter);
router.use("/recipes", recipeRouter)


module.exports = router;
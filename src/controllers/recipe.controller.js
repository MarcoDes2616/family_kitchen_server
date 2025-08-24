const catchError = require("../utils/catchError");
const { generateRecipe } = require("../services/geminiService");
const Recipe = require("../models/Recipe");


const requestRecipe = catchError(async (req, res) => {
  const { ingredients, familyId } = req.body;

    // Verifica que los ingredientes y el ID de la familia existan
    if (!ingredients || !familyId) {
      return res
        .status(400)
        .json({ message: "Ingredientes y ID de la familia son requeridos." });
    }

    // 1. Llama a la función de Gemini para generar la receta
    const generatedRecipe = await generateRecipe(ingredients);

    // // 2. Guarda la receta en tu base de datos
    // const newRecipe = await Recipe.create({
    //   family_id: familyId,
    //   ai_prompt: ingredients,
    //   title: generatedRecipe.title,
    //   ingredients: JSON.stringify(generatedRecipe.ingredients),
    //   instructions: generatedRecipe.instructions,
    //   requested_by_user_id: req.user.id,
    //   created_at: new Date(),
    // });

    // 3. Envía la respuesta al cliente
    res.status(201).json({
      message: "Receta generada y guardada exitosamente.",
      recipe: generatedRecipe,
    });
});

const create = catchError(async (req, res) => {
  const result = await Recipe.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Recipe.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Recipe.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Recipe.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

module.exports = {
  requestRecipe,
};

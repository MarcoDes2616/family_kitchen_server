const { GoogleGenerativeAI } = require('@google/generative-ai');

// Accede a tu clave de API desde las variables de entorno
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Genera una receta de cocina usando la API de Gemini.
 * @param {string} ingredients Los ingredientes proporcionados por el usuario.
 * @returns {Promise<string>} Un string con la receta generada.
 */
async function generateRecipe(ingredients) {
    try {
        // Selecciona el modelo de IA que quieres usar
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

        // Define el prompt para la IA. Sé lo más específico posible.
        const prompt = `
            Genera una receta de cocina fácil y rápida.
            La receta debe ser en español y basarse en los siguientes ingredientes: ${ingredients}.
            La respuesta debe tener el siguiente formato JSON:
            {
              "title": "Título de la Receta",
              "ingredients": ["ingrediente 1", "ingrediente 2", ...],
              "instructions": "Pasos para la preparación."
            }
        `;

        // Inicia el chat
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Limpia el JSON para que sea parseable.
        // A veces Gemini añade bloques de código, por eso usamos replace.
        const cleanJsonString = text.replace(/```json\n|\n```/g, '');
        const recipeObject = JSON.parse(cleanJsonString);

        return recipeObject;

    } catch (error) {
        console.error("Error al generar la receta con Gemini:", error);
        throw new Error("No se pudo generar la receta. Inténtalo de nuevo más tarde.");
    }
}

module.exports = {
    generateRecipe
};
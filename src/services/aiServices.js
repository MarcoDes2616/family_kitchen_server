const OpenAI = require("openai");
require("dotenv").config();
const promptSystem = require("../utils/promptSystem");

<<<<<<< Updated upstream
const openai = new OpenAI({
        baseURL: process.env.AI_API_URL,
        apiKey: process.env.AI_API_KEY,
=======
const aiClient = new OpenAI({
        baseURL: process.env.AI_API_URL_LOCAL,
        apiKey: process.env.AI_API_KEY_LOCAL,
>>>>>>> Stashed changes
});

async function aiGeneration(prompt) {
  const completion = await aiClient.chat.completions.create({
    messages: [{ role: "system", content: promptSystem }, 
                { role: "user", content: prompt }],
<<<<<<< Updated upstream
    model: process.env.AI_MODEL,
=======
    model: process.env.AI_MODEL_LOCAL,
>>>>>>> Stashed changes
  });
  console.log(completion);
  return completion.choices[0].message.content
}

module.exports = { aiGeneration };
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: process.env.AI_API_KEY
});

async function aiGeneration() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Tu eres un poderoso asistente" }],
    model: "deepseek-chat",
  });

  return completion.choices[0].message.content
}

module.exports = { aiGeneration };
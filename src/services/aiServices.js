const OpenAI = require("openai");
require("dotenv").config();
const promptSystem = require("../utils/promptSystem");

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: process.env.AI_API_KEY
});

async function aiGeneration(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: promptSystem }, 
                { role: "user", content: prompt }],
    model: "deepseek-chat",
  });
  console.log(completion);
  return completion.choices[0].message.content
}

module.exports = { aiGeneration };
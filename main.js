#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { Configuration, OpenAIApi } = require("openai");

const apiKey = process.argv[2];
const filePath = process.argv[3];
const instruction = process.argv[4];

if (!instruction || !filePath || !apiKey) {
  console.error(
    "Please provide an OpenAI API key, instruction and a file path."
  );
  process.exit(1);
}

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

const fileContent = fs.readFileSync(path.resolve(filePath), "utf-8");

async function getCompletion(instruction, content) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.5,
    max_tokens: 2000,
    messages: [
      {
        role: "system",
        content:
          "You are a helpful bot that hepls to apply commands to current code, just response with the full updated raw code. no markdown!",
      },
      { role: "user", content: content + "\n\n\n" + instruction },
    ],
  });
  return completion.data.choices[0].message.content;
}

getCompletion(instruction, fileContent)
  .then((result) => {
    fs.writeFileSync(path.resolve(filePath), result, "utf-8");
    console.log("File updated successfully.");
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

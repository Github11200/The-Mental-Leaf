// Require in all of the necessary modules
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require("http").Server(app);
const cors = require("cors");

const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const run = async (Prompt) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: Prompt,
        max_tokens: 2048,
        temperature: 0.4,
    });

    console.log(response.data.choices[0].text);
    return response.data.choices[0].text;
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post("/api/prompt", async (req, res) => {
    AIAnswer = "hi"; // await run(req.body.message)
    console.log(AIAnswer);
    res.send(JSON.stringify({ answer: AIAnswer }));
});

let server = http.listen(3001, () => {
    console.log(`Server is listening on port ${server.address().port}`);
});

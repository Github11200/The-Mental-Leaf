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
    console.log(Prompt);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        max_tokens: 2048,
        prompt: Prompt,
        temperature: 0,
    });

    return response.data.choices[0].text;
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post("/api/prompt", async (req, res) => {
    AIAnswer = await run(req.body.message); // await run(req.body.message)
    console.log(AIAnswer);
    res.send(JSON.stringify({ answer: AIAnswer }));
});

let server = http.listen(3001, () => {
    console.log(`Server is listening on port ${server.address().port}`);
});

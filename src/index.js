import express from "express";
import bodyParser from "body-parser";
import summarize from "./summarize";

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static("public"));

app.post("/summarize", async (req, res) => {
    try {
        const { text_to_summarize: text } = req.body;
        const response = await summarize(text);

        res.send(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("An error occurred while summarizing the text.");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
import express from "express";
import bodyParser from "body-parser";
import summarize from "./summarize";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
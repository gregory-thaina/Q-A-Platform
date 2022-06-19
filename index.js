const express = require("express");
const app = express();

// Setando o EJS
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/question", (req, res) => {
    res.render("question");
});

app.post("/savequestion", (req, res) => {
    res.send("Received!")
});

app.listen(8080, () => {
    console.log("Rodando!");
});
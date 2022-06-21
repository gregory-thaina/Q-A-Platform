const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Setando o EJS
app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas desenvolvidas
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/question", (req, res) => {
    res.render("question");
});

app.post("/savequestion", (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    res.send("Title: " + title + "\nDescription: " + description)
});

app.listen(8080, () => {
    console.log("Rodando!");
});
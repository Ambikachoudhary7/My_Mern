const express = require("express");
const path = require("path");
const app = express();

const port = 8080;
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

app.get("/Dice", (req, res)=>{
    let diceValue = Math.floor(Math.random()*6)+1;
    res.render("Dice.ejs", {diceValue});
});

app.set("/hello", (req, res)=>{
    res.send("hello");
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});
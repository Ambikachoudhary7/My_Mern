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

// instagram layout

app.get("/ig/:username", (req, res)=> {
    let {username} = req.params;
    let followers = ["Ambika", "Rahul", "Dhoni", "Sahil", "Ravi"];
    res.render("instagram.ejs", {username, followers});
});
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});

// make page which show insta id and post of the user

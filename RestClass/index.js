const express = require("express");
const path = require("path");

const app = express();

const port = 8080;

// Form data read karne ke liye
app.use(express.urlencoded({ extended: true }));

// EJS engine set karna
app.set("view engine", "ejs");

// views folder ka path
app.set("views", path.join(__dirname, "views"));

// public folder ki static files serve karna
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    
    {
        username : "apnaCollege",
        content : "I love coding",
    },

     {
        username : "Ambika choudhary",
        content : "I complete my internship in 5th sem",
    },

     {
        username : "Ravi choudhary",
        content : "I got internship",
    }

];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
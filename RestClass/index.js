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
        Id: "1b",
        username: "apnaCollege",
        content: "I love coding",
    },

    {
        id: "2b",
        username: "Ambika choudhary",
        content: "I complete my internship in 5th sem",
    },

    {
        id: "3b",
        username: "Ravi choudhary",
        content: "I got internship",
    }

];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
});


app.get("/posts/:id", (req, res) => {
    let { id } = req.params;

    let post = posts.find((p) => id === p.id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("Show.ejs", { post });
});


app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
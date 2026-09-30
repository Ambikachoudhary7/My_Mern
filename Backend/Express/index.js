const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
});

// -> use all provide response for whole page or whole web response
// app.use((req, res) =>{ 
//     console.log("recieved response");
//     // res.send("<h1>Fruits</h1><ul><li>Orange</li> <li>Red</li></ul>"); // send response in html formate
//     // these are the multiple way to send our request and response in server 
//     res.send("This is first Experience of Express.js"); // send response in String form
//     // res.send({ // send response in object form
//     //     name: "Ambika",
//     //     roll: 34,
//     //     marks: 98,
//     // });
// });

// routing
// we use app.get() -> they provide specific route where we go and work 

app.get("/", (req, res)=>{
    res.send("you contacted root path");
});

app.get("/apple", (req, res)=>{
    res.send("you contacted apple path");
});

app.get("/orange", (req, res)=>{
    res.send("you contacted orange path to Applicatinon");
});

// this add when we add wrong route *
// app.get("*", (req, res)=>{
//     res.send("you Write wrong Path");
// })

// post :- use to send anything to server
app.post("/", (req, res)=>{
    res.send("you sent a post request to root");
});


// path parameter
app.get("/:username/:id", (req, res)=>{
    let {username, id} = req.params;
    res.send(`Welcome to the page of @ ${username}.`);

    // let htmlstr = `<h1>Welcome to the page of @ ${username}.</h1>`
    // res.send(htmlstr);
});

// query String

app.get("/search", (req, res)=>{
    let {q} = req.query;
    // console.log(req.query);
    // res.send("no result");

    res.send(`<h1>Welcome to the Query ${q}.`);
});

const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
});

app.use((req, res) =>{
    console.log("recieved response");
    // res.send("<h1>Fruits</h1><ul><li>Orange</li> <li>Red</li></ul>"); // send response in html formate
    // these are the multiple way to send our request and response in server 
    res.send("This is first Experience of Express.js"); // send response in String form
    // res.send({ // send response in object form
    //     name: "Ambika",
    //     roll: 34,
    //     marks: 98,
    // });
});
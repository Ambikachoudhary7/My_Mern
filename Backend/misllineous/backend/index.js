const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req, res)=>{
    let {user, password} = req.query;
    res.send(`standard GET response. welcome ${user}`)
});

app.use(express.urlencoded({extended: true}));

app.post("/register", (req, res)=>{
    let {user, password} = req.body;
    res.send(`Standard Post response ${user}`);
});

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})
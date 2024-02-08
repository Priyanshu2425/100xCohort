const express = require("express");
const jwt = require("jsonwebtoken");
const z = require("zod");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pxyz943:wJY9mtvHp2rvZ7We@week3.qssgcap.mongodb.net/").catch(err=>console.log(err));
mongoose.connection.on('error', err => {
    logError(err);
  });
  
const app = express();
const PORT = 3000;
const server_password = "6491"

app.use(express.json());

let users = [];

function validateInputs(req, res, next){
    const schema = z.object({
        username: z.string().email(),
        password: z.string().min(8)
    })

    const userDetails = schema.safeParse(req.body);
    if(userDetails.success){
        users.push(userDetails.data.username);
        next();
    }else{
        res.status(400).send("Invalid email or password");
    }
}


app.get("/signin", validateInputs, (req, res)=>{
    const token = jwt.sign({username: req.body.username}, server_password);
    res.status(200).json({"token": token});
})

app.get("/users", (req, res)=>{
    const auth = req.headers.authorization;
    if(jwt.verify(auth, server_password)) res.status(200).json(JSON.stringify(users));
    else res.status(404).send("Invalid Request")
    res.send("users working");
})

app.listen(PORT, ()=>{
    console.log("Server started successfully.");
})
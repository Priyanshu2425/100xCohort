const express = require('express')

const app = express();

const username = "testuser"
const password = "123"

app.get('/health-checkup', (req, res)=>{
    const user_name = req.headers.username;
    const pass_word = req.headers.password;
    const kidneys = parseInt(req.query.kidneys);

    console.log(user_name, pass_word, kidneys);
    console.log(username, password);
    if(user_name != username && pass_word != password){
        res.status(403).json({
            msg: "user doesn't exist"
        })
    }

    if(kidneys < 1 || kidneys > 2 ){
        res.status(411).json({
            msg: "user doesn't exist"
        })
        
    }

    res.send("Your heart is healthy")
})

app.listen(3000, ()=>{
    console.log("Successfullly started server");
})
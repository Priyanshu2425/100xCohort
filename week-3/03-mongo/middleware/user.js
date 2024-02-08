const zod = require("zod");

const username = zod.string();
const password = zod.string().min(8);

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const _username = req.headers.username;
    const _password = req.headers.password;

    if(username.safeParse(_username).success && password.safeParse(_password).success){
        next();
    }else{
        res.status(404).send("Username doesn't exist or password is wrong.");
    }
}

module.exports = userMiddleware;
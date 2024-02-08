const zod = require("zod")

const username = zod.string();
const password = zod.string().min(8);

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const _username = req.headers.username;
    const _password = req.headers.password;

    if(username.safeParse(_username).success && password.safeParse(_password).success){
        next();
    }else{
        res.status(404).send("Invalid username or password");
    }
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

}

module.exports = adminMiddleware;
const { Router } = require("express");
const z = require("zod");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db/index.js");
const { default: mongoose } = require("mongoose");

// Admin Routes
router.post('/signup', adminMiddleware, (req, res) => {
    const _username = req.headers.username;
    const _password = req.headers.password;

    const new_admin = new Admin({username: _username, password: _password});
    new_admin.save().then(()=>{
        res.send(200).json({ message: 'Admin created successfully' });
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    const admin = Admin.find({username: req.headers.username, password: req.headers.password});
    if(!admin){
        res.status(404).json({message: 'User not found'});
        return;
    }

    const schema = z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        price: z.number(),
        imageLInk: z.string().min(1),
    })

    const course = schema.safeParse(req.body);

    const new_course = new Course(course.data);
    new_course.save().then(()=>{
        res.status(200).json({ message: 'Course created successfully', courseId: course.data.title });
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    const admin = Admin.findOne({username:req.headers.username, password: req.headers.password});
    console.log(req.headers.username, req.headers.password);
    console.log(admin);
    if(!admin) {
        console.log("USER NOT FOUND");
        res.status(404).json({message: "User not found"});
        return;
    }
    console.log("USER FOUND")
    res.status(200).send(Course.find());
});

module.exports = router;
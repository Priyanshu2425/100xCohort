const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://pxyz943:wJY9mtvHp2rvZ7We@week3.qssgcap.mongodb.net/test');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String, 
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String
})

const Admin = mongoose.model('Admins', AdminSchema);
const User = mongoose.model('Users', UserSchema);
const Course = mongoose.model('Courses', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
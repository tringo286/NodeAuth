const mongoose = require('module');
const { isEmail } = require('validator');

const userSchema = mongoose.Schema({
    email: {
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        require: [true, 'Please enter a passwor'],
        minlength: [6, 'Password must be at least 6 characters long']
    }
});

const User = new mongoose.model('user', userSchema);

module.exports = User;
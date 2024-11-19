const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt =  require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [ isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        require: [true, 'Please enter a passwor'],
        minlength: [6, 'Password must be at least 6 characters']
    }
});

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;
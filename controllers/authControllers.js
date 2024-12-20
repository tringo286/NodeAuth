const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, SECRET_KEY, { expiresIn: maxAge });
}

const handleErrors = (error) => {
    const errors = { email: '', password: '' };     

    if(error.message === 'incorrect email') {
        errors.email = "Email is not registerd";
    }

    if(error.message === 'incorrect password') {
        errors.password = "Password is incorrect";
    }

    if(error.code === 11000) {
        errors.email = 'Email is already registerd';
        return errors;
    }

    if(error.message.includes('user validation failed')) {
        Object.values(error.errors).forEach( ({properties})  =>{ 
            errors[properties.path] = properties.message;
        });        
    }    
    return errors;
};

const signup_post = async (req, res) => {
    const user = req.body;

    try {
        const newUser = await User.create(user);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });        
        res.status(201).json({ success: true, user: newUser });
    } catch (err) {
        const errors = handleErrors(err);        
        res.status(400).json({ success: false, errors: errors});
    }
};

const login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ success: true, user: email});
    } catch (err) {
        const errors = handleErrors(err); 
        res.status(400).json({ success: false, errors: errors});
    }
};

const signup_get = (req, res) => {
    res.render('signup');
};

const login_get = (req, res) => {
    res.render('login');
}

const logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}

module.exports = { signup_post, login_post, signup_get, login_get, logout_get };
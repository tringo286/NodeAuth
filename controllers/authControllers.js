const User = require('../models/userAuth');

const signup_post = async (req, res) => {
    const user = req.body;

    try {
        const newUser = await User.create(user);
        res.status(201).json({ success: true, user: newUser });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ success: false, errors: err});
    }
};

module.exports = { signup_post };
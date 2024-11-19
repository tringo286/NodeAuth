const mongoose = require('mongoose');

const connectDb = async (req, res) => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to Mongodb');
    } catch (err) {
        console.error('Failed to connect to Mongodb', err);        
    }
};

module.exports = { connectDb };
const express = require('express');
const dotenv = require('dotenv');
const { connectDb } = require('./configs/db')
 
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on http://localhost:${PORT}`);
});
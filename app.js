const express = require('express');
const dotenv = require('dotenv');
const { connectDb } = require('./configs/db')
const authRoutes = require('./routes/authRoutes');
 
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(authRoutes);

app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on http://localhost:${PORT}`);
});
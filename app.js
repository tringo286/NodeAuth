const express = require('express');
const dotenv = require('dotenv');
const { connectDb } = require('./configs/db')
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleWare/authMiddleware')
 
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// routes
app.get('*', checkUser);
app.use(authRoutes);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'))

app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on http://localhost:${PORT}`);
});
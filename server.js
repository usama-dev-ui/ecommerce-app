require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
//const { MongoClient, ServerApiVersion } = require('mongodb');

connectDB();

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);   // Product routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
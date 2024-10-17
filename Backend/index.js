const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const uploadRoutes = require('./routes/UploadRoutes');
const productRoutes = require('./routes/ProductRoutes');    
const userRoutes = require('./routes/UserRouter');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Static folder for uploaded images
app.use('/images', express.static('uploads/images'));

// Routes
app.use('/api/uploads', uploadRoutes);
app.use('/api/products', productRoutes);
app.use('/api/user', userRoutes);

// Health check route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

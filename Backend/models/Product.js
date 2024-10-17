const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    id: {
        type: String,  // Your custom id
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
    },
    description: {
        type: String, // If you want to store description, add this to schema
    },
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    available: {
        type: Boolean,
        default: true
    }
});
module.exports = mongoose.model('Product', productSchema);

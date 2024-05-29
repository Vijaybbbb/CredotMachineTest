const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        unique: true // Keeping unique constraint for email field
    },
    type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    
    },
    imageURL :{
       type:String,
    },
    AdditionalImagesURL :{
       type:String,
    },
    
    
}, { timestamps: true });

const Products = mongoose.model('product', productSchema);

module.exports = Products;

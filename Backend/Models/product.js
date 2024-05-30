const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
    },
    colors: [],
    varients:[],
    imagesURL :[
        {
            type:String,  
         },
    ]
   
    
    
}, { timestamps: true });

const Products = mongoose.model('product', productSchema);

module.exports = Products;

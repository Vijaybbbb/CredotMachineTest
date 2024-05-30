const mongoose = require('mongoose')
const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // or the model name to which it refers
    required: true,
  },
  Products: [
    {
      type: Schema.Types.ObjectId, // Change to ObjectId
      ref: 'product', 
      required: true,
    },
  ],
}, { timestamps: true });

const Cart = model('cart', cartSchema);

module.exports = Cart;
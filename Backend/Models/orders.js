const mongoose = require('mongoose')
const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // or the model name to which it refers
    required: true,
  },
  Orders: [
    {
       TotalPrice:{type:String},
       Products:[],

    },
  ],
}, { timestamps: true });

const Orders = model('orders', orderSchema);

module.exports = Orders;
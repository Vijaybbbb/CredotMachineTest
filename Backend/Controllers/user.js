const { default: mongoose } = require("mongoose");
const User = require("../Models/user");
const Cart = require("../Models/cart");
const products = require("../Models/product");
const { createError } = require("../utils/error");
const Orders = require("../Models/orders");
const Products = require("../Models/product");





const allProducts =async(req,res,next) =>{
      
       const userId =new mongoose.Types.ObjectId(req.params.userId)
       try {
              const carts = await Cart.aggregate([
                     {
                       $match: { UserId: userId }
                     },
                     {
                       $lookup: {
                         from: 'products',
                         let: { productList: '$Products' },
                         pipeline: [
                           {
                             $match: {              
                               $expr: {
                                 $in: ['$_id', '$$productList']
                               }
                             }
                           }
                         ],
                         as: 'CartItems'
                       }
                     }
                   ]);
                 res.status(200).json(carts[0]?.CartItems)

              
       } catch (error) {
              console.log(error);
       }
}



const  getSingleProduct = async(req,res,next)=>{
       try {
              const products = await Products.findById(req.params.id)
              res.status(200).json(products)

       } catch (error) {
              console.log(error);
              next(createError(401, "Product Getting failed"))
       }
       
}
 






const  addToCart  = async(req,res,next) =>{
       try {
              const userId =new mongoose.Types.ObjectId(req.params.userId)
              const productId = new mongoose.Types.ObjectId(req.params.productId)

              const cart = await Cart.findOne({ UserId: userId });
              if (cart) {
                // If the user already has a cart, update it
                cart.Products.push(productId);
                await cart.save();
              } else {
                // If the user doesn't have a cart, create a new one
                await Cart.create({ UserId: userId, Products: [ productId ] });
               
              }

              res.status(200).json('Added succesfully')
          
            } catch (error) {
             
              console.log(error)
              return next(createError(401,'Failed to add to cart'))
            }
}



const deleteFromCart = async (req, res, next) => {

       try {
              const userId = req.params.userId;
              const productId = req.params.productId
              console.log(userId,productId);

              // Update the cart to remove the specified blog ID
              const updatedCart = await Cart.findOneAndUpdate(
                     { UserId: new mongoose.Types.ObjectId(userId) },
                     { $pull: { Products: productId } },
                     { new: true } // This option returns the modified document after update
              );

              if (!updatedCart) {
                     return res.status(404).json({ message: 'Cart not found' });
              }

              res.status(200).json('deleted succesfully')

       } catch (error) {
              console.log(error)
              return next(createError(401, 'Failed to delete from cart'))
       }
}




const  myOrders = async(req,res,next)=>{
       console.log(req.params.id);
       try {
              const products = await Orders.findOne({UserId:req.params.id})
              res.status(200).json(products)

       } catch (error) {
              console.log(error);
              next(createError(401, "Product Getting failed"))
       }
       
}







const checkOut = async(req,res,next) =>{

       const order = {
              UserId: req.body.userId,
              Orders:[
                     {
                            TotalPrice:req.body.total,
                            Products:req.body.cartItems.map((cartItem) => ({
                                   // Extract product details from cartItem
                                   name: cartItem.name, // Assuming cartItem has a name property
                                   price: cartItem.price, // Assuming cartItem has a price property
                                   _id:cartItem._id,
                                   quantity:cartItem.quantity
                                   // Add other product properties as needed
                                 }))
                     }
              ]
           }

          try {
             const orderSlot =  await Orders.find({UserId:req.body.userId})
            
             if(orderSlot.length == 0 ){
              console.log('creating');
                     await Orders.create(order)
             }
             else{
                     await Orders.updateOne({UserId:new mongoose.Types.ObjectId(req.body.userId)},
                     {
                            $addToSet:{
                                   Orders:{
                                          TotalPrice:req.body.total,
                                          Products:req.body.cartItems.map((cartItem) => ({
                                                 // Extract product details from cartItem
                                                 name: cartItem.name, // Assuming cartItem has a name property
                                                 price: cartItem.price, // Assuming cartItem has a price property
                                                 _id:cartItem._id,
                                                 quantity:cartItem.quantity
                                                 // Add other product properties as needed
                                               }))
                                   }
                            }
                     })  
             }

             res.status(200).json('Success')

          } catch (error) {
             console.log(error);
          }    

}


const clearCart = async(req,res) =>{
      // console.log(req.params.id);
       try {
            await Cart.deleteOne({UserId:new mongoose.Types.ObjectId(req.params.id)})  
            res.status(200).json('Success')
            
       } catch (error) {
              console.log(error);
       }
}


module.exports = {
       addToCart,
       allProducts,
       checkOut,
       clearCart,
       getSingleProduct,
       deleteFromCart,
       myOrders
}
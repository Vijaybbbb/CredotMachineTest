const Products = require("../Models/product")
const { createError } = require("../utils/error")
const {cloudinary} = require('../utils/cloudinary')
const User = require("../Models/user")
const { default: mongoose } = require("mongoose")
const Orders = require("../Models/orders")
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken');

const createProduct = async (req, res, next) => {
       let urls=[]
       const uploadPromises = req.files.map(async (image) => {
              try {
                  // Perform the upload and return the result
                  const uploadResult = await cloudinary.uploader.upload(image.path);
                  urls.push(uploadResult.secure_url)
              } catch (error) {
                  // Handle the error appropriately
                  console.log(error);
                  throw error; // Optionally re-throw the error if you want to handle it outside
              }
          });
  
          // Wait for all uploads to complete
          await Promise.all(uploadPromises);
      

       
       try {
             const newProduct = {
              name:req.body.name,
              price:req.body.price,
              type:req.body.type,
              colors:req.body.colors.split(','),
              varients:req.body.varient.split(','),
              imagesURL:urls
             } 
             console.log(req.body);
            
               const products = await Products.create(newProduct)
               res.status(200).json(products)

       } catch (error) {  
              console.log(error); 
              next(createError(401, "Products getting failed"))       
       }
}

const getAllProducts = async (req, res, next) => {
       try {
              const products = await Products.find({}) 
              res.status(200).json(products)

       } catch (error) {
              next(createError(401, "Products getting failed"))
       }
}

const  getSingleProduct = async(req,res,next)=>{
       try {
              const products = await Products.findById(req.params.id)
              res.status(200).json(products)

       } catch (error) {
              next(createError(401, "Product Getting failed"))
       }
       
}


const  deleteSingleProduct =async (req,res,next)=>{
       try {
              const products = await Products.findByIdAndDelete(req.params.id)
              res.status(200).json(products)

       } catch (error) {
              next(createError(401, "Product Deletion failed"))
       }
       
}


const  updateProduct =async (req,res,next)=>{
       try {
              const products = await Products.findByIdAndUpdate(req.params.id,{
                     $set: {
                            name: req.body.name,
                            price: req.body.price,
                            type: req.body.type,
                            colors: req.body.colors.split(','),
                            varients: req.body.varient.split(','),
                            imagesURL: urls
                     }
              })
              res.status(200).json(products)

       } catch (error) {
              next(createError(401, "Product Deletion failed"))
       }
       
}

const getAllUsers = async (req, res, next) => {
       try {
              const users = await User.find({}) 
              res.status(200).json(users)

       } catch (error) {
              next(createError(401, "Products getting failed"))
       }
}

const getAllOrders = async (req, res, next) => {
       try {
              const orders = await Orders.find({}) 
              let list = [] 
              orders.map((userObj)=>{
                  userObj.bookings.map((bookings)=>{
                     list.push({user:userObj.userId,
                               bookingId:bookings._id,
                               status:bookings.status,
                               price:bookings.totalPrice,
                               bookedNumbers:bookings.bookedNumbers,
                               allDates:bookings.allDates,
                               hotelName:bookings.hotelName,
                               hotel:bookings.hotel
                            })   
              })
         })

         res.status(200).json(list);

       } catch (error) {
              next(createError(401, "Orders getting failed"))
       }
}


const blockUser = async (req, res, next) => {
       console.log(req.query.id);   
       try {

              if (req.body.blocked) {
                     const user = await User.findByIdAndUpdate(new mongoose.Types.ObjectId(req.query.id), {
                            $set: {
                                   isBlocked: false
                            }
                     })
                     return res.status(200).json(user)

              }
              else{
              const user = await User.findByIdAndUpdate(req.query.id, {
                     $set: {
                            isBlocked: true
                     }
              })

              return res.status(200).json(user)
              }

       } catch (err) {
              console.log(err);
              next(createError(401, 'Failed to get User'))

       }

}



const deleteProduct = async (req, res, next) => {
       try {
               await Products.findByIdAndDelete(req.params.id) 
              res.status(200).json("deleted")

       } catch (error) {
              next(createError(401, "Products deletion failed"))
       }
}


const adminLogin = async (req, res, next) => {
  
       try {
              const { username, email, password } = req.body;
            const existingUser = await User.findOne({ email });
             if (existingUser) {
                   if(existingUser.isAdmin == true){
                     const checkPassword = await bcrypt.compare(password,existingUser.password)
                     if(checkPassword){
                            const tocken  = jwt.sign({id:existingUser._id,isAdmin:existingUser.isAdmin},process.env.JWT_SECRET_KEY)
                            const {password,isAdmin,...otherDetails} = existingUser._doc
                            res.cookie('admin_access_tocken',tocken,{
                                   httpOnly:true,
                                   path:'/'
                                   }
                                   ).status(200).json({...otherDetails});
                     }
                     else{
                            
                            return next(createError(401,'Invalid Credentials'))
                     }
                  }
                  return next(createError(401,'Invalid Credentials'))

                  
           }
           
           return next(createError(401,'Invalid Credentials'))
          

       } catch (error) {
              next(createError(401, "Login failed"))
       }
}


module.exports ={
       createProduct,
       getAllProducts,
       getSingleProduct,
       deleteSingleProduct,
       updateProduct,
       getAllUsers,
       blockUser,
       getAllOrders,
       deleteProduct,
       adminLogin
       
}
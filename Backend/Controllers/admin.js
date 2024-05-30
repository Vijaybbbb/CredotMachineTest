const Products = require("../Models/product")
const { createError } = require("../utils/error")
const {cloudinary} = require('../utils/cloudinary')

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


const  getAllOrders = async(req,res,next)=>{

}

module.exports ={
       createProduct,
       getAllProducts,
       getSingleProduct,
       deleteSingleProduct,
       getAllOrders
}
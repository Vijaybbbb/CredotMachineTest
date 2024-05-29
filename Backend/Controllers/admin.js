const Products = require("../Models/product")
const { createError } = require("../utils/error")


const createProduct = async (req, res, next) => {
       try {
             const newProduct = {
              name:req.body.name,
              price:req.body.price,
              type:req.body.type,
              color:req.body.color,

             } 
              const products = await Products.create()
              res.status(200).json(products)

       } catch (error) {
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
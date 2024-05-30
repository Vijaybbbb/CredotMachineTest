const express = require('express')
const { getAllProducts, getSingleProduct, createProduct } = require('../Controllers/admin')
const router  = express.Router()
const multer  = require('multer')

const storage = multer.diskStorage({
       destination:function(req,file,cb){
              cb(null,'./images')
       }, 
       filename:function (req,file,cb){
              const uniqueSuffix = Date.now()
              cb(null,uniqueSuffix+file.originalname)
       }
})

const upload = multer({storage:storage})


router.post('/create',upload.array('images'),createProduct)

router.get('/allProducts',getAllProducts)

router.get('/getSingleProduct/:id',getSingleProduct)








module.exports = router
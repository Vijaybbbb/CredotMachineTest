const express = require('express')
const { getAllProducts, getSingleProduct, createProduct, getAllUsers, blockUser, getAllOrders, deleteProduct, adminLogin } = require('../Controllers/admin')
const router  = express.Router()
const multer  = require('multer')
const { myOrders } = require('../Controllers/user')

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

router.post('/update/:id',upload.array('images'),createProduct)


router.get('/allProducts',getAllProducts)

router.get('/allUsers',getAllUsers)

router.get('/allOrders',getAllOrders)


router.post('/blockUser',blockUser)



router.get('/getSingleProduct/:id',getSingleProduct)


router.delete('/deleteProduct/:id',deleteProduct)



router.post('/adminLogin',adminLogin)



module.exports = router
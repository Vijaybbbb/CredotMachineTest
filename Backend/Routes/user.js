const express = require('express')
const { addToCart, allProducts, checkOut, clearCart, getSingleProduct, deleteFromCart } = require('../Controllers/user')


const router  = express.Router()

router.post('/addtoCart/:userId/:productId',addToCart)

router.get('/allProducts/:userId',allProducts)

router.post('/checkOut',checkOut)

router.delete('/clearCart/:id',clearCart)  

router.delete('/deleteFromCart/:productId/:userId',deleteFromCart)   

router.get('/getSingleProduct/:id',getSingleProduct)   
    

module.exports = router
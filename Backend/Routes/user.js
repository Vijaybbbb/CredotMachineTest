const express = require('express')
const { addToCart, allProducts, checkOut, clearCart, getSingleProduct } = require('../Controllers/user')


const router  = express.Router()

router.post('/addtoCart/:userId/:productId',addToCart)

router.get('/allProducts/:userId',allProducts)

router.post('/checkOut',checkOut)

router.delete('/clearCart/:id',clearCart)   

router.get('/getSingleProduct/:id',getSingleProduct)   


module.exports = router
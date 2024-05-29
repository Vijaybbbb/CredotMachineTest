const express = require('express')
const { getAllProducts, getSingleProduct } = require('../Controllers/admin')


const router  = express.Router()



router.get('/allProducts',getAllProducts)

router.get('/getSingleProduct/:id',getSingleProduct)








module.exports = router
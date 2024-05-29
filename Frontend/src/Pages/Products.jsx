import React from 'react'
import NavbarPage from '../Components/Navbar/Navbar'
import Carousel from '../Components/Carousel/Carousel'
import ProductCard from '../Components/Products/ProductCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img from '../../src/assets/Images/image 48.png'
import '../Css/products.css'
import PaginationBox from '../Components/Pagination/PaginationBox';
import Footer from '../Components/Footer/Footer'


const Products = () => {
       const products = [
              {
                     image: img, // Replace with actual image path
                     name: 'iPhone 14 Pro max 256GB - Deep Purple',
                     description: 'Audio Amplifier, HDMI Projectors',
                     price: 4699.00,
                     oldPrice: 4699.00,
                     isHot: true
              },
              {
                     image: img, // Replace with actual image path
                     name: 'iPhone 14 Pro max 256GB - Deep Purple',
                     description: 'Smart Phone',
                     price: 4699.00,
                     oldPrice: 4699.00,
                     isHot: false
              },
              {
                     image: img, // Replace with actual image path
                     name: 'iPhone 14 Pro max 256GB - Deep Purple',
                     description: 'Audio Amplifier, HDMI Projectors',
                     price: 4699.00,
                     oldPrice: 4699.00,
                     isHot: true
              },
              {
                     image: img, // Replace with actual image path
                     name: 'iPhone 14 Pro max 256GB - Deep Purple',
                     description: 'Smart Phone',
                     price: 4699.00,
                     oldPrice: 4699.00,
                     isHot: false
              },
              {
                     image: img, // Replace with actual image path
                     name: 'iPhone 14 Pro max 256GB - Deep Purple',
                     description: 'Audio Amplifier, HDMI Projectors',
                     price: 4699.00,
                     oldPrice: 4699.00,
                     isHot: true
              },
              {
                     image: img, // Replace with actual image path
                     name: 'iPhone 14 Pro max 256GB - Deep Purple',
                     description: 'Smart Phone',
                     price: 4699.00,
                     oldPrice: 4699.00,
                     isHot: false
              },
              // Add more products as needed
       ];
       return (
              <div className='products'>
                     <NavbarPage />
                     <Carousel />

                     <Container>
                            <h2 className="my-4">Products</h2>
                            <Row>
                                   <div className='cardContainer'>

                                          {products.map((product, index) => (

                                                 <ProductCard product={product} />

                                          ))}
                                   </div>
                            </Row>
                     </Container>
                     <PaginationBox/>
                     <Footer/>
                     
              </div>
       )
}

export default Products

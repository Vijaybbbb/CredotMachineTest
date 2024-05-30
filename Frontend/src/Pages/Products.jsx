import React from 'react'
import NavbarPage from '../Components/Navbar/Navbar'
import Carousel from '../Components/Carousel/Carousel'
import ProductCard from '../Components/Products/ProductCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img from '../../src/assets/Images/image 48.png'
import '../Css/products.css'
import PaginationBox from '../Components/Pagination/PaginationBox';
import Footer from '../Components/Footer/Footer'
import useFetch from '../CustomHook/useFetch';


const Products = () => {
       const {data,loading} = useFetch('/admin/allProducts') 

       console.log(data,'oruihgowei');


       return (
              <div className='products'>
                     <NavbarPage />
                     <Carousel />

                     <Container>
                            <h2 className="my-4">Products</h2>
                            <Row>
                                   <div className='cardContainer'>

                                          {data.map((product, index) => (

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

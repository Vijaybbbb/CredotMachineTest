// src/components/ProductPage.js

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button, Form, Card } from 'react-bootstrap';
import img from '../../src/assets/Images/image 48.png'
import '../Css/singleProduct.css'
import NavbarPage from '../Components/Navbar/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../CustomHook/useFetch';
import { useSelector } from 'react-redux';
import { axiosRequest } from '../utils/axiosRequest';

const SingleProductPage = () => {

    const {userId} = useSelector(state => state.userDetails)
    const location  = useLocation()
    let id = location.search.replace('?', '');
    const { data, loading, refetchData } = useFetch(`/user/getSingleProduct/${id}`);
    const [images,setImages] = useState()
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedVarient, setVarient] = useState(null);
    const [quantity,setQuantity] = useState(1)
    const navigate = useNavigate()

  
    useEffect(()=>{
        setImages(data.imagesURL)
    },[data])

    function handleButtonClick(e,color){
        e.preventDefault()
        setSelectedColor(color);

    }

    function handleButtonClickVarient(e,varient){
        e.preventDefault()

        setVarient(varient);
        console.log();

    }

    function handleAddtoCart (e){
        e.preventDefault()
        e.stopPropagation()
    
        axiosRequest.post(`/user/addtoCart/${userId}/${data._id}`,{selectedColor,selectedColor,},{withCredentials:true}).then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
    
        })

        navigate(`/cart/${selectedColor}/${selectedColor}/${quantity}`)
    

    }



    return (
       <div>
        <NavbarPage />
        <Container>
            <Row className="my-4">
                <Col md={6}>
            
                  <Image src={images ? images[0] : img} className="img-fluid img" />

                    <div className="mt-3">
                         <Image src={images ? images[1] : img} thumbnail className="me-2" /> 
                         <Image src={images ? images[2] : img} thumbnail /> 
                    </div>
                </Col>
                <Col md={6}>
                    <h1 className='text'>{data.name}</h1>
                    <p><s>OMR 6,699.00</s> <strong>OMR {data.price}</strong></p>
                    <p>(There are no reviews yet.)</p>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>

                    <Form>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2}>Colour:</Form.Label>
                                <Col sm={10}>
                                    {
                                        data && data.colors ? (
                                            data.colors.map((color) => (
                                                <Button variant="outline-secondary" onClick={(e) => handleButtonClick(e,color)} style={{background:color}} className="me-2 colorbtn" key={color}>
                                                     {selectedColor === color ? '✔️' : ''}
                                                </Button>
                                            ))
                                        ) : (
                                            <div></div>
                                        )
                                    }

                                </Col>
                            </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Internal Memory:</Form.Label>
                            <Col sm={10}>
                                {
                                        data && data.colors ? (
                                            data.varients.map((varient) => (
        
                                                      <Button style={{background:selectedVarient == varient ? 'grey' : '',color:selectedVarient == varient ? 'white' : 'grey' }} variant="outline-secondary" className="me-2" onClick={(e) => handleButtonClickVarient(e,varient)}>
                                                            {varient}
                                                      </Button>

                                            ))
                                        ) : (
                                            <div></div>
                                        )
                                    }
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm={2}>Quantity:</Col>
                            <Col sm={10}>
                                <Button variant="outline-secondary" className="me-2" onClick={()=>{setQuantity(quantity - 1)}}>-</Button>
                                <span>{quantity}</span>
                                <Button variant="outline-secondary" className="ms-2" onClick={()=>{setQuantity(quantity + 1)}}>+</Button>
                            </Col>
                        </Form.Group>
                        
                        <Button variant="primary" className="mt-3" onClick={handleAddtoCart}>
                            
                            Add to Cart
                            
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <h2>Specifications</h2>
                    <Card>
                        <Card.Body>
                            <ul>
                                <li>Bluetooth: V5.0</li>
                                <li>Screen Size: 1.39 inches</li>
                                <li>Screen Resolution and Brightness: 360*360, 600 Nits Daylight-Bright Display, 2.5D Curved Glass</li>
                                <li>Battery Capacity: 400 mAh</li>
                                <li>Sports Modes: 100+</li>
                                <li>Health Monitoring: SpO2, 24/7 Heart Rate Monitoring, Blood Pressure, High Heart Rate Alert</li>
                                <li>Health Tracking: Menstrual Cycle, Sleep</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
       </div>
    );
};

export default SingleProductPage;

// src/components/ProductPage.js

import React from 'react';
import { Container, Row, Col, Image, Button, Form, Card } from 'react-bootstrap';
import img from '../../src/assets/Images/image 48.png'
import '../Css/singleProduct.css'

const SingleProductPage = () => {
    return (
        <Container>
            <Row className="my-4">
                <Col md={6}>
                    <Image  src={img} fluid />
                    <div className="mt-3">
                        <Image src={img} thumbnail className="me-2" />
                        <Image src={img} thumbnail />
                    </div>
                </Col>
                <Col md={6}>
                    <h1>iPhone 12 Pro max 256GB Deep Purple</h1>
                    <p><s>OMR 6,699.00</s> <strong>OMR 4,699.00</strong></p>
                    <p>(There are no reviews yet.)</p>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>

                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Colour:</Form.Label>
                            <Col sm={10}>
                                <Button variant="outline-secondary" className="me-2">Silver</Button>
                                <Button variant="outline-secondary" className="me-2">Red</Button>
                                <Button variant="outline-secondary" className="me-2">Green</Button>
                                <Button variant="outline-secondary" className="me-2">Blue</Button>
                                <Button variant="outline-secondary" className="me-2">Black</Button>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Internal Memory:</Form.Label>
                            <Col sm={10}>
                                <Button variant="outline-secondary" className="me-2">256 GB</Button>
                                <Button variant="outline-secondary" className="me-2">512 GB</Button>
                                <Button variant="outline-secondary" className="me-2">1 TB</Button>
                                <Button variant="outline-secondary" className="me-2">128 GB</Button>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm={2}>Quantity:</Col>
                            <Col sm={10}>
                                <Button variant="outline-secondary" className="me-2">-</Button>
                                <span>1</span>
                                <Button variant="outline-secondary" className="ms-2">+</Button>
                            </Col>
                        </Form.Group>
                        
                        <Button variant="primary" className="mt-3">Add to Cart</Button>
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
    );
};

export default SingleProductPage;

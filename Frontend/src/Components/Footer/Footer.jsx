import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Custom CSS for additional styling

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4} className="text-center text-md-left">
                        <h5 className="brand-logo">DEMO</h5>
                    </Col>
                    <Col md={4} className="text-center">
                        <h6>CONNECTED WITH US</h6>
                        <div className="social-icons">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </Col>
                    <Col md={4} className="text-center text-md-right">
                        <h6>IMPORTANT LINKS</h6>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">Terms & Conditions</a></li>
                            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                            <li className="list-inline-item"><a href="#">Help & FAQs</a></li>
                        </ul>
                        <div className="helpline">
                            <i className="fas fa-phone-alt"></i>
                            <div>
                                <small>Helpline</small>
                                <p>1800 456 84788</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <small>Arab Deals © 2023. All Rights Reserved</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

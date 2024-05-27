import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Footer.css'; // Custom CSS for additional styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faHotel, faPerson, faPhone, faPlane, faShop, faTaxi, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col className="pt-4">
                        <h5 className="brand-logo">DEMO</h5>
                    </Col>
                </Row>

                <Row className='align-items-center g-5 pt-4'>
                    <Col xs={{ order: 'last',}} md={{ order: 'first'}}  className="text-center text-md-left " >
                        <h6>CONNECTED WITH US</h6>
                        <Button className="me-2">
                        <FontAwesomeIcon  icon={faFacebook}/>
                        </Button>
                        <Button className="me-2">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </Button>
                        <Button className="me-2">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </Button>
                        <Button className="me-2">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </Button>  
                    </Col>
                    <Col xs={12} md={4} className="text-center ">
                        <h6>IMPORTANT LINKS</h6>
                    </Col>
                    <Col  xs={{ order: 'first'}} md={{ order: 'last'}}  className="text-center text-md-right ">
                        <Button>
                            <FontAwesomeIcon icon={faPhone}/>
                        </Button>
                        <h6>HelpLine</h6>
                        <h4>1800 456 12343</h4>
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

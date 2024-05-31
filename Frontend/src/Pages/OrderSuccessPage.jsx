import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Css/succes.css'; // Import custom styles if any
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faCheck, faHotel, faPerson, faPlane, faShop, faTaxi, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import NavbarPage from '../Components/Navbar/Navbar';

const ConfirmationPage = () => {
       const navigate = useNavigate()

       useEffect(()=>{

              setTimeout(()=>{
                     navigate('/products')
              },[2000])

       },[])




  return (
    <>
   
    <Container className="text-center">
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col md={6}>
          <div className="confirmation-circle">
          <FontAwesomeIcon style={{color:"white"}} icon={faCheck}  className='icon'/> 
          </div>
          <h3>Your order has been placed successfully.</h3>
         
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ConfirmationPage;

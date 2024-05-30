import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navabar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faHotel, faPerson, faPlane, faShop, faTaxi, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';



const  NavbarPage = () => {
  const navigate = useNavigate()
  return ( 
    <>
       <div className='Navbar'>
       <Navbar className="bg-body-tertiary justify-content-between">  
      <Form inline>
        <InputGroup>
         <h1 onClick={()=>{navigate('/products')}}>Demo</h1>
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
             <Button type="submit">
            <FontAwesomeIcon style={{color:"black"}} icon={faUser}  className='adminPanelIcons'/> 

             </Button>
          </Col>
          <Col xs="auto">
            <Button onClick={()=>{navigate('/cart')}}>
            <FontAwesomeIcon style={{color:"black"}} icon={faShop}  className='adminPanelIcons'/> 
 
            </Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
       </div>
    </>
  )
}

export default NavbarPage

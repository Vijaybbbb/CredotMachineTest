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
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {storeUser,authenticated} from '../../Redux/userSlice'
import { axiosRequest } from '../../utils/axiosRequest';


const  NavbarPage = () => {
  const navigate = useNavigate()
 const dispatch  = useDispatch()
 const { userId,auth} = useSelector(state => state.userDetails);



  function handleLogout(e){
    e.preventDefault()

   axiosRequest.post(`/clearCookie?userId=${userId}`,'',{withCredentials:true}).then(()=>{
      localStorage.clear()
      dispatch(storeUser(null))
      dispatch(authenticated(false))

      navigate('/login')
  }).catch((err)=>{
      console.log(err);
  })
  }



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
       
          {
            auth ? (

              <Row>
                <Col xs="auto">
                <DropdownButton id="dropdown-basic-button" title={<FontAwesomeIcon style={{ color: "black" }} icon={faUser} className='adminPanelIcons' />}>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  <Dropdown.Item  onClick={()=>{        navigate(`/orders`)}}>Orders</Dropdown.Item>
                </DropdownButton> 
          </Col>
          <Col xs="auto">
            <Button onClick={()=>{        navigate(`/cart/${'white'}/${'32GB'}/${1}`)
}}>
            <FontAwesomeIcon style={{color:"black"}} icon={faShop}  className='adminPanelIcons'/> 
 
            </Button>
          </Col>
              </Row>
            ):(
              <Row>
               
          <Col xs="auto">
            <Button style={{background:'black',color:'white'}} onClick={()=>{        navigate(`/login`)
}}>
            Login
 
            </Button>
          </Col>
              </Row>
            )
          }
        
      </Form>
    </Navbar>
       </div>
    </>
  )
}

export default NavbarPage

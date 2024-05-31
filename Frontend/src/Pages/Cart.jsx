import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Form, Image, Popover } from 'react-bootstrap';
import NavbarPage from '../Components/Navbar/Navbar';
import useFetch from '../CustomHook/useFetch';
import { useSelector } from 'react-redux';
import { axiosRequest } from '../utils/axiosRequest';
import { useNavigate, useParams } from 'react-router-dom';
import '../Css/cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faClose, faHotel, faPerson, faPlane, faShop, faTaxi, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";


const CartPage = () => {


  const { userId } = useSelector(state => state.userDetails);
  const { data, loading, refetchData } = useFetch(`/user/allProducts/${userId}`);
  const details  = useParams()
  console.log(details);

  
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    if (data) {
      const itemsWithQuantity = data.map(item => ({ ...item, quantity: details.qty !=false ? Number(details.qty) : 1 ,color:details.color !=false ? details.color : 'black' ,memory:details.varient !=false ? details.varient : '32GB' }));
      setCartItems(itemsWithQuantity);
      calculateTotal(itemsWithQuantity);
    }
  }, [data]);

useEffect(()=>{

},[data])

  const handleQuantityChange = (index, delta) => {
    const updatedCartItems = [...cartItems];
    const item = updatedCartItems[index];
    if (item.quantity + delta >= 1) {
      item.quantity += delta;
      setCartItems(updatedCartItems);
      calculateTotal(updatedCartItems);
    }
  };

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(total);
  };

  async function handleCheckout(e) {
    e.preventDefault();
  
    try {
      const checkoutResponse = await axiosRequest.post(
        `/user/checkOut`,
        { cartItems, total, userId },
        { withCredentials: true }
      );
  
      if (checkoutResponse.status === 200) { 

        axiosRequest.delete( `/user/clearCart/${userId}`,
        { userId },
        { withCredentials: true }).then(()=>{
           refetchData()
           navigate('/success');
        }).catch(err=>console.log(err))

      } else {
       
        console.error('Checkout failed:', checkoutResponse.data);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  }

  function deleteFromCart(id){

    axiosRequest.delete(`/user/deleteFromCart/${id}/${userId}`).then((res)=>{
        refetchData()
    }).catch((err)=>{
        console.log(err);
    })
  }


  
  if (data.length == 0 ) {
    return (
      <>
      <NavbarPage />
      <div className="empty-cart-container">
          <h1>Cart Empty</h1>
        </div>
      </>
    )
  }

  return (
    <>
      <NavbarPage />
      <Container className="mt-5">
        <h1 className="text-center">Cart</h1>
        <Row>
          <Col md={8}>
            <Table bordered>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item._id}>
                    <td className="d-flex align-items-center position-relative">
                      <div className="image-container">
                        <Image src={item.imagesURL[0]} rounded className="mr-2 mr-2img" />
                        <button className="delete-button" onClick={() => deleteFromCart(item._id)}>
                              <FontAwesomeIcon style={{color:"black"}} icon={faClose}  className='adminPanelIcons'/> 
                          
                        </button>
                      </div>
                      <span>{item.name}</span>
                    </td>
                    <td>OMR {item.price.toFixed(2)}</td>
                    <td className="d-flex align-items-center justify-content-center">
                      <Button variant="outline-secondary" className="mr-2" onClick={() => handleQuantityChange(index, -1)}>-</Button>
                      <Form.Control type="text" value={item.quantity} readOnly style={{ width: '50px', textAlign: 'center' }} />
                      <Button variant="outline-secondary" className="ml-2" onClick={() => handleQuantityChange(index, 1)}>+</Button>
                    </td>
                    <td>OMR {(item.price * item.quantity).toFixed(2)}</td>
                    
                  </tr>
                ))}
              </tbody>
            </Table>
            <Form className="d-flex justify-content-between">
              <Form.Group>
                <Form.Control type="text" placeholder="Coupon code" />
              </Form.Group>
              <Button variant="dark">Apply Coupon</Button>
              <Button variant="secondary">Update Cart</Button>
            </Form>
          </Col>
          <Col md={4}>
            <div className="border p-3">
              <h4>Cart Totals</h4>
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>OMR {total.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Total</span>
                <span>USD {total.toFixed(2)}</span>
              </div>
              <Button variant="primary" block className="mt-3" onClick={handleCheckout}>Proceed to Checkout</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartPage;

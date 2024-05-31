import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import NavbarPage from '../Components/Navbar/Navbar';
import useFetch from '../CustomHook/useFetch';
import { useSelector } from 'react-redux';

const OrdersPage = () => {
  const { userId,auth} = useSelector(state => state.userDetails);

  const {data,loading} = useFetch(`/user/myOrders/${userId}`) 
  const [orders, setOrders] = useState([]);

console.log(data.Orders);

useEffect(()=>{
       if(data){
              setOrders(data?.Orders)
       }
},[data])
 
  return (
    <>
    <NavbarPage/>
    <Container className="mt-4">
      <h2>Orders</h2><br />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Products</th>
          
            
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {data && orders?.map((order) => (
            <tr key={order.id}>
              <td>{order._id}</td>
         
              <td>{order?.Products?.map((p)=>{return p.name})}</td>
              <td>{order.TotalPrice}</td>
              {/* <td>${order.totalPrice.toFixed(2)}</td> */}
              <td>{order.status}</td>
              <td>
                <Button variant="primary" size="sm">
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container></>
  );
};

export default OrdersPage;

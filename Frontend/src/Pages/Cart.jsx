import React from 'react';
import { Container, Row, Col, Table, Button, Form, Image } from 'react-bootstrap';
import NavbarPage from '../Components/Navbar/Navbar';

const CartPage = () => {
  return (
<>
       <NavbarPage/>
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
              <tr>
                <td className="d-flex align-items-center">
                  <Image src="https://via.placeholder.com/50" rounded className="mr-2" />
                  <span>iPhone 12 Pro Max</span>
                </td>
                <td>OMR 107.00</td>
                <td className="d-flex align-items-center justify-content-center">
                  <Button variant="outline-secondary" className="mr-2">-</Button>
                  <Form.Control type="text" value="1" readOnly style={{ width: '50px', textAlign: 'center' }} />
                  <Button variant="outline-secondary" className="ml-2">+</Button>
                </td>
                <td>OMR 107.00</td>
              </tr>
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
              <span>OMR 107.00</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Total</span>
              <span>USD 107.00</span>
            </div>
            <Button variant="primary" block className="mt-3">Proceed to Checkout</Button>
          </div>
        </Col>
      </Row>
    </Container>
</>
  );
};

export default CartPage;

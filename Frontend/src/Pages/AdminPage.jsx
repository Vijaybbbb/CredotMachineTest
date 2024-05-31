import React from 'react';
import { Container, Nav, Navbar, Tab,Tabs, Row, Col } from 'react-bootstrap';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import ManageProducts from '../Components/Admin/ManageProducts';
import ManageUsers from '../Components/Admin/ManageUser';
import ManageOrders from '../Components/Admin/ManageOrders';



const AdminPage = () => {
  const navigate = useNavigate()
  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <button onClick={()=>{
            localStorage.clear()
            navigate('/adminLogin')
          }}>Logout</button>
        </Navbar.Collapse>
      </Navbar>
      <Container className="mt-3">
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Products" title="Products">
        <ManageProducts/>
      </Tab>
      <Tab eventKey="Users" title="Users">
        <ManageUsers/>
      </Tab>
      <Tab eventKey="Orders" title="Orders" >
        <ManageOrders/>
      </Tab>
    </Tabs>
      </Container>
    </Container>
  );
}

export default AdminPage;

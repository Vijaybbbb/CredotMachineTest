// ManageOrders.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ManageOrders = () => {
  return (
    <div>
      <h2>Manage Orders</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Populate with order data */}
          <tr>
            <td>1</td>
            <td>1001</td>
            <td>Pending</td>
            <td>
              <Button variant="warning" className="me-2">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ManageOrders;

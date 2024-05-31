// ManageOrders.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import useFetch from '../../CustomHook/useFetch';

const ManageOrders = () => {

  const {data,loading,refetchData} = useFetch('/admin/allOrders') 
console.log(data);

  return (
    <div>
      <h2>Manage Orders</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {
            data && data.map((order)=>(
              <tr>
              <td>{order._id}</td>
              <td>1001</td>
              <td>Pending</td>
              <td>
                <Button variant="warning" className="me-2">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
            ))
          }
         
        </tbody>
      </Table>
    </div>
  );
}

export default ManageOrders;

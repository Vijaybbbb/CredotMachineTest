// ManageUsers.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ManageUsers = () => {
  return (
    <div>
      <h2>Manage Users</h2>
      <Button variant="primary" className="mb-3">Add User</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Populate with user data */}
          <tr>
            <td>1</td>
            <td>User 1</td>
            <td>user1@example.com</td>
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

export default ManageUsers;

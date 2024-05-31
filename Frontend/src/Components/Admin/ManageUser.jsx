// ManageUsers.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import useFetch from '../../CustomHook/useFetch';
import { axiosRequest } from '../../utils/axiosRequest';

const ManageUsers = () => {


  const {data,loading,refetchData} = useFetch('/admin/allUsers') 

  function handleBlock(e,blocked,id){
    e.preventDefault()
   console.log(blocked);
   axiosRequest.post(`/admin/blockUser?id=${id}`,{blocked:blocked},{withCredentials:true}).then((res)=>{
      console.log(res);
      refetchData()
  }).catch(err => console.log(err))
}

console.log(data);
  return (
    <div>
      <h2>Manage Users</h2>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>ID</td>
            <td>Email</td>
            <td>Blocked</td>
          </tr>
        </thead>
        <tbody>
         {
          data && data.map((user)=>(
            <tr>
            <td>{user._id}</td>
            <td>{user.email}</td>
            <td>{String(user.isBlocked)}</td>
            <td>
              
              <Button variant="danger" onClick={(e)=>{handleBlock(e,user.isBlocked,user._id)}}>
                 <span>{user?.isBlocked ? "UnBlock" : "Block"}</span>
              </Button>
            </td>
          </tr>
          ))
         }
        </tbody>
      </Table>
    </div>
  );
}

export default ManageUsers;

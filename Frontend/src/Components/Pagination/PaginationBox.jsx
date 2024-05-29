import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import './Pagination.css'

const PaginationBox = () => {
  let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
  return (
    <div className='pagination'>
      <div className='container'>
       <Pagination>
      
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{1}</Pagination.Item>

      <Pagination.Next />
  
     </Pagination>
    </div>
    </div>
  )
}

export default PaginationBox

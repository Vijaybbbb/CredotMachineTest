import React, { useState } from 'react'
import { Card, Button, Badge } from 'react-bootstrap';
import './ProductCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBed } from "@fortawesome/free-solid-svg-icons";
import { faFacebook} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from 'react-router-dom';
import {axiosRequest} from '../../utils/axiosRequest'
import { useSelector } from 'react-redux';

const ProductCard = ({product}) => {

  const {userId,auth} = useSelector(state => state.userDetails)
  const navigate = useNavigate()


  function handleAddtoCart() {

    axiosRequest.post(`/user/addtoCart/${userId}/${product._id}`).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);

    })
    

  }




  function handleView(e) {
    e.preventDefault()
    navigate(`/SingleProduct?${product._id}`)
    
  }

  return (
    <div className='Card' onClick={handleView}>
      <Card className="m-2">
      {product && <Badge bg="success" className="mb-2 badge">HOT</Badge>}
      <div className="text-center p-2">
        <img src={product.imagesURL[0] ||product.imagesURL[1] } alt={product.name} className="img-fluid img" />
      </div>
      <Card.Body>
        
        <Card.Title className='textType'>{product.type || 'SmartPhone'}</Card.Title>
        <Card.Title className='text'>{product.name}</Card.Title>
        <Card.Text className='text'>{product.description}</Card.Text>
        <div className="d-flex justify-content-between">
          <div>
            <strong className='text1'><small>OMR</small> {product.price} </strong>
            <span className="text-muted text1 text-decoration-line-through ms-2">
              {product.price+5000} 
            </span>
          </div>
          <Button variant="primary" className='primary' onClick={(e)=>{
             e.preventDefault()
             e.stopPropagation()
            if(auth){
              handleAddtoCart()
            }else{
              navigate('/login')
            }
          } }>
              <FontAwesomeIcon icon={faAdd}/>
          </Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard

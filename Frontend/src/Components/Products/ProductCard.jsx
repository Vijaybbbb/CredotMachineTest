import React, { useState } from 'react'
import { Card, Button, Badge } from 'react-bootstrap';
import './ProductCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBed } from "@fortawesome/free-solid-svg-icons";
import { faFacebook} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from 'react-router-dom';


const ProductCard = ({product}) => {

  const [] = useState()
  const navigate = useNavigate()

  function handleAddtoCart(e) {
    e.preventDefault()
    e.stopPropagation()
  }
  function handleView(e) {
    e.preventDefault()
    navigate('/SingleProduct')
    
  }

  return (
    <div className='Card' onClick={handleView}>
      <Card className="m-2">
      {/* {product.isHot && <Badge bg="success" className="mb-2">HOT</Badge>} */}
      <div className="text-center p-2">
        <img src={product.image} alt={product.name} className="img-fluid img" />
      </div>
      <Card.Body>
        
        <Card.Title className='text'>{product.name}</Card.Title>
        <Card.Text className='text'>{product.description}</Card.Text>
        <div className="d-flex justify-content-between">
          <div>
            <strong className='text1'><small>OMR</small> {product.price} </strong>
            <span className="text-muted text1 text-decoration-line-through ms-2">
              {product.oldPrice} 
            </span>
          </div>
          <Button variant="primary" className='primary' onClick={handleAddtoCart}>
              <FontAwesomeIcon icon={faAdd}/>
          </Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard

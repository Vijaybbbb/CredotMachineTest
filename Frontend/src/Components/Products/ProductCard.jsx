import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap';
import './ProductCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBed } from "@fortawesome/free-solid-svg-icons";
import { faFacebook} from "@fortawesome/free-brands-svg-icons";


const ProductCard = ({product}) => {
  return (
    <div className='Card'>
      <Card className="m-2">
      {/* {product.isHot && <Badge bg="success" className="mb-2">HOT</Badge>} */}
      <div className="text-center p-2">
        <img src={product.image} alt={product.name} className="img-fluid img" />
      </div>
      <Card.Body>
        
        <Card.Title className='text'>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <div className="d-flex justify-content-between">
          <div>
            <strong>{product.price} OMR</strong>
            <span className="text-muted text-decoration-line-through ms-2">
              {product.oldPrice} OMR
            </span>
          </div>
          <Button variant="primary" className='primary'>
              <FontAwesomeIcon icon={faAdd}/>
          </Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard

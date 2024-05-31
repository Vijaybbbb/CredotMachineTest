

import React, { useState } from 'react';
import './css/ManageProducts.css'
import { axiosRequest } from '../../utils/axiosRequest';
import useFetch from '../../CustomHook/useFetch';

const EditProduct = ({show}) => {

       const {data,loading,refetchData} = useFetch('/admin/allProducts') 
       const handleClose = () => setShow(false);
       const handleShow = () => setShow(true);
       const [colors,setColors] = useState(['white'])
       const [varient,setVarient] = useState(['32GB'])

       const [productData,setProductData] = useState({})
       const [images,setImages]  = useState([])

       function getColors(e){
              const { checked, name } = event.target;

              // Update the selectedColors array based on checkbox state
              setColors((prevColors) => {
                if (checked) {
                  // Add the color to the array if checked
                  return [...prevColors, name];
                } else {
                  // Remove the color from the array if unchecked
                  return prevColors.filter((color) => color !== name);
                }
              })         
       }
       function getVarient(e){
              const { checked, name } = event.target;

              // Update the selectedColors array based on checkbox state
              setVarient((preVarient) => {
                if (checked) {
                  // Add the color to the array if checked
                  return [...preVarient, name];
                } else {
                  // Remove the color from the array if unchecked
                  return preVarient.filter((varient) => varient !== name);
                }
              })         
       }


       function setData(e){
              setProductData({
                     ...productData,
                     [e.target.name]:e.target.value,
                     colors,
                     varient
              })
             
       }

       function onInputChange(e){
              
              const files = Array.from(e.target.files);
              setImages([...images, ...files]);
               
       }
       console.log(productData);

       async function handleCreate(e) {
              e.preventDefault();
              const formData = new FormData();

              images.forEach((image) => {
                     formData.append('images', image);
              });
              for (const key in productData) {
                     formData.append(key, productData[key]);
              }

                  axiosRequest.post(`/admin/create`, formData,

                     {
                            withCredentials: true,
                            headers: {
                                   'Content-Type': 'multipart/form-data'
                            }
                     }).then((res) => {
                            
                            setShow(false)
                            refetchData()
                            

                     }).catch((error) => {
                            console.log(error);
                     })
       }

  return (
    <div>
       <Modal className='model h-17' show={show} onHide={handleClose} >
                            <Modal.Header closeButton>
                                   <Modal.Title>Add New</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ height: '500px' }}>


                                   <Form>
                                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                 <Form.Control type="email" placeholder="Product Name" name='name' onChange={setData} /><br/>
                                                 <Form.Control type="number" placeholder="Product Price " name='price'  onChange={setData} /><br/>
                                                 <Form.Select aria-label="Default select example" name='type'  onChange={setData}>
                                                        <option disabled>Select Type</option>
                                                        <option value="SmartPhone">SmartPhone</option>
                                                        <option value="Accessasories">Accessasories</option>
                                                        <option value="HeadPhone">HeadPhone</option>
                                                 </Form.Select><br/>
                                                 <Form.Control type="file" onChange={onInputChange} multiple placeholder="Product Name"   /><br/>
                                                 
                                                 <label htmlFor="">Colors</label><br /><br />
                                                 <Form.Check
                                                        inline
                                                        type="checkbox"
                                                        id="inline-checkbox-1"
                                                        label="Red"
                                                        onChange={getColors}
                                                        name='red'
                                                 />
                                                 <Form.Check
                                                        inline
                                                        type="checkbox"
                                                        id="inline-checkbox-2"
                                                        label="Black"
                                                        onChange={getColors}
                                                        name='black'

                                                 />
                                                  <Form.Check
                                                        inline
                                                        type="checkbox"
                                                        id="inline-checkbox-2"
                                                        label="Blue"
                                                        onChange={getColors}
                                                        name='blue'

                                                 /><br /><br />

                                                 <label htmlFor="">Varient</label><br /><br />
                                                 <Form.Check
                                                        inline
                                                        type="checkbox"
                                                        id="inline-checkbox-1"
                                                        label="64GB"
                                                        onChange={getVarient}
                                                        name='64GB'
                                                 />
                                                 <Form.Check
                                                        inline
                                                        type="checkbox"
                                                        id="inline-checkbox-2"
                                                        label="124GB"
                                                        onChange={getVarient}
                                                        name='124GB'

                                                 />
                                                  <Form.Check
                                                        inline
                                                        type="checkbox"
                                                        id="inline-checkbox-2"
                                                        label="256GB"
                                                        onChange={getVarient}
                                                        name='256GB'

                                                 />
        
      

                                          </Form.Group>
                                          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                 <Form.Label>Example textarea</Form.Label>
                                                 <Form.Control as="textarea" rows={3} />
                                          </Form.Group> */}
                                   </Form>



                            </Modal.Body>
                            <Modal.Footer>
                                   <Button variant="secondary" onClick={handleClose}>
                                          Close
                                   </Button>
                                   <Button variant="primary" onClick={handleCreate}>
                                          Create
                                   </Button>
                            </Modal.Footer>
                            </Modal>
    </div>
  )
}

export default EditProduct

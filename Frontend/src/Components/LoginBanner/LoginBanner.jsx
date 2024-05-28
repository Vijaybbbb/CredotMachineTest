import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginBanner.css'; // Import the CSS file
import { axiosRequest } from '../../utils/axiosRequest'

const LoginBanner = () => {

    const [successMessage,setSuccessMessage]  = useState()
    const [errorMessage,setErrorMessage] = useState()
    const [userData, setUserData] = useState({
        email: '',
        password: ''  
    })

    let getValue = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

        function handleSubmit(e){
            e.preventDefault()
            e.preventDefault(); // Prevent default form submission
            axiosRequest.post('/auth/login',userData,{withCredentials:true}).then((response) => {
               setSuccessMessage(response.data.message)
               //dispatch(storeUser(response.data._id))
               navigate('/products')
               setIsAuthenticated(true)
               localStorage.setItem('isAuthenticated',true);
           }).catch(err => setErrorMessage(err.response.data.message))
        }


    return (
        <div className='LoginBanner container'>
            <Form className='form-container' onSubmit={handleSubmit}>
            <div className='h1Container'>
            <h4>Login/Register your Account</h4><br />
            
            </div><br />
                <Form.Group className="mb-3 outer" controlId="formBasicEmail">
                    
                    <Form.Control className='input' name='email' type="email" placeholder="Enter email" onChange={getValue} />
                </Form.Group>

                <Form.Group className="mb-3"  controlId="formBasicPassword">
                    
                    <Form.Control className='input' name='password' type="password" placeholder="Password" onChange={getValue}/>
                </Form.Group>
               <div className='btnContainer'>
                      
                <Button variant="primary" className='button' type="submit">
                    LOGIN
                </Button>
               </div>
            </Form>
        </div>
    );
}

export default LoginBanner;

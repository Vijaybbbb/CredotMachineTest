import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginBanner.css'; // Import the CSS file

const LoginBanner = () => {
    return (
        <div className='LoginBanner container'>
            <Form className='form-container'> {/* Add a class to the form */}
            <div className='h1Container'>
            <h4>Login/Register your Account</h4><br />
            {/* <h6>efhfvbbhfkvjbfviuvuruieubvcfnjcfjcnjfncjfnjfncjfnc</h6> */}
            
            </div><br />
                <Form.Group className="mb-3 outer" controlId="formBasicEmail">
                    
                    <Form.Control className='input' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control className='input' type="password" placeholder="Password" />
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

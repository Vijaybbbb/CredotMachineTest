import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginBanner.css'; // Import the CSS file
import { axiosRequest } from '../../utils/axiosRequest'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { storeUser } from '../../Redux/userSlice';

const LoginBanner = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [successMessage,setSuccessMessage]  = useState()
    const [errorMessage,setErrorMessage] = useState()
    const [isAuthenticated,setIsAuthenticated]  = useState()
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
            axiosRequest.post('/auth/register',userData,{withCredentials:true}).then((response) => {
               setSuccessMessage(response.data.message)
               toast.success("Login successfull!");
               dispatch(storeUser(response.data._id))
               setTimeout(()=>{
                navigate('/products')
               },2000)
               setIsAuthenticated(true)
               localStorage.setItem('isAuthenticated',true);
           }).catch(err =>toast.error("Invalid Credentials"))
        }


    return (
        <div className='LoginBanner container'>
            <ToastContainer/>
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

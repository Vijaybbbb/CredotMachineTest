import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Components/LoginBanner/LoginBanner.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import NavbarPage from '../Components/Navbar/Navbar';
import { axiosRequest } from '../utils/axiosRequest';


const AdminLoginBanner = () => {


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
            axiosRequest.post('/admin/adminLogin',userData,{withCredentials:true}).then((response) => {
               setSuccessMessage(response.data.message)
               toast.success("Login successfull!");
               setTimeout(()=>{
                navigate('/admin')
               },2000)
               setIsAuthenticated(true)

           }).catch(err =>toast.error("Invalid Credentials"))
        }


    return (
    <><NavbarPage/>
        <div className='LoginBanner container'>
            <ToastContainer/>
            <Form className='form-container' onSubmit={handleSubmit}>
            <div className='h1Container'>
            <h4>Admin Login</h4><br />
            
            </div><br />
                <Form.Group className="mb-3 outer" controlId="formBasicEmail">
                    
                    <Form.Control className='input' required name='email'  type="email" placeholder="Enter email" onChange={getValue} />
                </Form.Group>

                <Form.Group className="mb-3"  controlId="formBasicPassword">
                    
                    <Form.Control className='input' required name='password'   type="password" placeholder="Password" onChange={getValue}/>
                </Form.Group>
               <div className='btnContainer'>
                      
                <Button variant="primary" className='button' type="submit">
                    LOGIN
                </Button>
               </div>

            </Form>
        </div>
               <h5 style={{marginLeft:'100px'}}>admin@123 pass:123</h5>
    </>
    );
}

export default AdminLoginBanner;

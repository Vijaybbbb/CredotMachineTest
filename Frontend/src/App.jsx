import { useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Pages/Login'
import Products from './Pages/Products'
import SingleProductPage from './Pages/SingleProduct'
import AdminPage from './Pages/AdminPage'
import CartPage from './Pages/Cart'
import OrdersPage from './Pages/Orders'
import AdminLoginBanner from './Pages/AdminLogin'
import ConfirmationPage from './Pages/OrderSuccessPage'

function App() {

  const [authenticated,setAuthenticated] = useState()

  const router = createBrowserRouter([
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:"/products",
      element:<Products/>
    },
    {
      path:"/",
      element:<Products/>
    },
    {
      path:"/SingleProduct",
      element:<SingleProductPage />
    },
    {
      path:"/admin",
      element:<AdminPage/>
    },
    {
      path:"/cart/:color/:varient/:qty",
      element:<CartPage/>
    },
    {
      path:"/orders",
      element:<OrdersPage/>
    },
    {
      path:"/adminLogin",
      element:<AdminLoginBanner/>
    },
    {
      path:"/success",
      element:<ConfirmationPage/>
    },
    
  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider> 
  )
}

export default App

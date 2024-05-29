import { useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Pages/Login'
import Products from './Pages/Products'
import SingleProductPage from './Pages/SingleProduct'

function App() {
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
      path:"/SingleProduct",
      element:<SingleProductPage/>
    }
  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider> 
  )
}

export default App

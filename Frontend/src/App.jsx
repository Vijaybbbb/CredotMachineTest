import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarPage from './Components/Navbar/Navbar'
import LoginBanner from './Components/LoginBanner/LoginBanner'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarPage/>
    <LoginBanner/>
    <Footer/>
    </>
  )
}

export default App

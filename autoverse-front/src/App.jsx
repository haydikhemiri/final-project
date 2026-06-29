import React from 'react'
import Navbar from './components/shared/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import Register from './pages/Register'
import CarDescription from './pages/CarDescription'
import Marketplace from './pages/Marketplace'
import Profile from './pages/Profile'
import Footer from './components/shared/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home  />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNotFound />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/carDescription/:id" element={<CarDescription />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer/>
    </div>
  )
}
export default App

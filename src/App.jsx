import React from 'react'
import Footer from "./components/commons/Footer"
import Navbar from "./components/commons/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Register from './pages/Register'
function App() {
  return (
    <Router>
    <>
    <div className="w-full bg-[#121212] text-yellow-200 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
        <Footer/>
    </div>
    </>
    </Router>
  )
}

export default App

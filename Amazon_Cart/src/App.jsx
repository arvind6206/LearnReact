import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Cart from './components/Cart.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path='/' element={<Sidebar />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App

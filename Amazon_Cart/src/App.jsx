import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ProductCard from './components/ProductCard'
import products from './data/products.js'
import Cart from './components/Cart.jsx'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>

       <Routes>
        <Route path='/' element={<Sidebar/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     
     
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ProductCard from './components/ProductCard'
import products from './data/products.js'

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
     
    </div>
  )
}

export default App

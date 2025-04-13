import React from 'react'
import NavBar from './Components/NavBar'
import Products from './Components/Products'

import './App.css'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Products />
    </div>
  )
}

export default App
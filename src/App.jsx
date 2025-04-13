import React from 'react'
import NavBar from './Components/NavBar'
import Products from './Components/Products'

import './App.css'
import Chat from './Components/Chat'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Products />
      <Footer />
      <Chat />
    </div>
  )
}

export default App
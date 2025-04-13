import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Products from './Components/Products'
import Footer from './Components/Footer'
import ChatBot from './Components/ChatBot'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Products />
      <ChatBot />
      <Footer />
    </div>
  )
}

export default App
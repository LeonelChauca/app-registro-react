import { useState } from 'react'
import './App.css'
import { NavBar } from './Components/NavBar'
import {Login} from './Components/Login'

function App() {

  return (
    <>
      <div className='container mx-auto h-screen'>
        <NavBar/>
        <Login/>
      </div>
      
    </>
  )
}

export default App

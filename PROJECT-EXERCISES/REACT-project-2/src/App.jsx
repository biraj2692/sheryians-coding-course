import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './Routes/MainRoutes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='w-full h-full bg-gray-800 text-white font-thin py-5 px-[10%] '>
    <Nav />      
      <MainRoutes />
    </div>
  )
}

export default App
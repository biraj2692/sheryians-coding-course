import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Service from './components/Service';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Nav from './components/Nav';
const App = () => {
  return (
    <div >
      <Nav/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/service' element={<Service/>}/>
      </Routes>
    </div>
  )
}

export default App;

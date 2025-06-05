import React from 'react'
// import Nav from './components/Nav';
import Mainroutes from './Routes/Mainroutes';

import Nav from './components/Nav';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100" >
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App;

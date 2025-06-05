import Service from '../components/Service';
import Home from '../components/Home';
import About from '../components/About';
import Products from '../components/Products';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import ServiceDetails from '../components/ServiceDetails';

const Mainroutes = () => {
  return (
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/details/:id' element={<ProductDetails/>}/>
          <Route path='/service' element={<Service/>}>
            <Route path='/service/details/:id' element={<ServiceDetails/>}/>
          </Route>
      </Routes>
  )
}

export default Mainroutes

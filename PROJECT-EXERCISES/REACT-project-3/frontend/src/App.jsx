import { useEffect } from 'react';
import { asyncGetProducts } from './store/Reducer/UserAction';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data);
  
  useEffect(() => {
    dispatch(asyncGetProducts());
  },[])
  
  return (
    <div>App</div>
  )
}

export default App
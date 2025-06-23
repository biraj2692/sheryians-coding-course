import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainRoutes from "./Routes/MainRoutes";
import Navbar from "./Components/Navbar";
import { asyncCurrentUser } from "./store/Actions/UserAction";
// import { asyncLoadProducts } from "./store/Actions/productAction";

const App = () => {
  const user = useSelector((state) => state.users.data);
  // const products = useSelector((state) => state.products.data);
  
  const dispatch = useDispatch();
  useEffect(() => {
    !user && dispatch(asyncCurrentUser());
    }, [user]);

  // useEffect(() => {
  //   products.length==0 && dispatch(asyncLoadProducts());
  //   }, [products]);

  return (
    <div className="bg-gray-800 text-white w-screen p-10 text-lg">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;

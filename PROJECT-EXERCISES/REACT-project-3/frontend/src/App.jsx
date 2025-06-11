import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainRoutes from "./Routes/MainRoutes";
import Navbar from "./Components/Navbar";
import { asyncCurrentUser } from "./store/Actions/UserAction";
import { asyncLoadProducts } from "./store/Actions/productAction";

const App = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
    }, []);

  return (
    <div className="overflow-auto bg-gray-800 text-white w-screen h-screen p-10 text-lg">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Register from "../Pages/Register";
import CreateProduct from "../Pages/admin/CreateProduct";
import ProductDetail from "../Pages/admin/ProductDetail";
import Profile from "../Pages/users/Profile";
import PageNotFound from "../PageNotFound";
import AuthWrapper from "./AuthWrapper";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />

      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>

            <CreateProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/admin/user-profile"
        element={
          <AuthWrapper>
            <Profile />
          </AuthWrapper>
        }
      />
      <Route
        path="/product/:id"
        element={
          <AuthWrapper>
          
            <ProductDetail />
          </AuthWrapper>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;

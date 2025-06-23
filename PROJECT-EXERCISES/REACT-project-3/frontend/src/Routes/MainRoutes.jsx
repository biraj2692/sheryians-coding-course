import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import UnauthWrapper from "./UnauthWrapper";
const AuthWrapper = lazy(() => import("./AuthWrapper"));
// Lazy load components
const Home = lazy(() => import("../Pages/Home"));
const Login = lazy(() => import("../Pages/Login"));
const PageNotFound = lazy(() => import("../PageNotFound"));
const Products = lazy(() => import("../Pages/Products"));
const Register = lazy(() => import("../Pages/Register"));
const CreateProduct = lazy(() => import("../Pages/admin/CreateProduct"));
const ProductDetail = lazy(() => import("../Pages/admin/ProductDetail"));
const Profile = lazy(() => import("../Pages/users/Profile"));
const Cart = lazy(() => import("../Pages/Cart"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={
        <UnauthWrapper>
        <Login />
        </UnauthWrapper>
        }
         />
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
      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
// import { asyncLogoutUser } from '../store/Actions/UserAction';

const Navbar = () => {
  const user = useSelector((state) => state.users.data);
  
  

  return (
    <nav className='flex gap-5 mb-5 p-5 items-center justify-center'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        {user ? (
          <>
          <NavLink to={"/admin/create-product"}>Create Product</NavLink>
          {/* <NavLink to={"/admin/user-profile"}>User Profile</NavLink> */}
          <NavLink to={"/admin/user-profile"}>Settings</NavLink>
          <NavLink to={"/cart"}>Cart</NavLink>
            <span className="ml-4">Welcome, {user.name}</span>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
          </>
        )}
    </nav>
  )
}

export default Navbar

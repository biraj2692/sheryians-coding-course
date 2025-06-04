import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/service">Service</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Nav
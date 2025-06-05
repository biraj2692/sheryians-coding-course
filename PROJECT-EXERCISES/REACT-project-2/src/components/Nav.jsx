import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 ">
      <NavLink className={(e) => e.isActive ? "text-red-400" : ""} to="/">
        Home
      </NavLink>
      <NavLink className={(e) => e.isActive ? "text-red-400" : ""} to="/recipes">
        Recipes
      </NavLink>
      <NavLink className={(e) => e.isActive ? "text-red-400" : ""} to="/about">
        About
      </NavLink>
      <NavLink className={`px-4 py-2 bg-gray-900 rounded-full ${(e) => e.isActive ? "text-red-400" : ""}`} to="/create-recipe">
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Nav;

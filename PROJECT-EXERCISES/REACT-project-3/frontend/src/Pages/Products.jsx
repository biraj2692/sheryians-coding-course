import { Link, NavLink } from 'react-router-dom'
import React from "react";
import { useSelector } from "react-redux";
const Products = () => {
  const product = useSelector((state) => state.products.data);

  const renderProducts = product.map((product) => {
    return (
      <div className="w-[30%]  mr-3 mb-3 border shawdow" key={product.id}>
        <img className="w-full h-[30vh] object-cover" src={product.image} alt="" />
        <h1>{product.title}</h1>
        <h3>{product.description.slice(0, 100)}</h3>
        <div className="p-3 mt-3 flex justify-between items-center">
          <h3>{product.price}</h3>
          <h3>{product.category}</h3>
          <button>Add to Cart</button>
        </div>
        <Link to={`/product/${product.id}`}>More Details</Link>
      </div>
    );
  });

  return product.length > 0 ? <div className="overflow-auto flex flex-wrap">{renderProducts}</div> : <div>Loading....</div>;
};

export default Products;

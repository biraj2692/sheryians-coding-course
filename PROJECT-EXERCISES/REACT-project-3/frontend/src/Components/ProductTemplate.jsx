import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/Actions/UserAction";

const ProductTemplate = ({product}) => {
    const dispatch = useDispatch();
  const user = useSelector((state) => state.users.data);

   const addToCarHandler = (id) => {
    // Check if user exists and has a cart property
    if (!user || !user.cart) {
      console.error("User or user.cart is undefined");
      return;
    }

    // Create a deep copy of the user object with the cart
    const copyUser = {
      ...user,
      cart: Array.isArray(user.cart) ? [...user.cart] : [],
    };

    // Find the existing item in the cart
    const existingItemIndex = copyUser.cart.findIndex(
      (c) => c.productid === id
    );

    if (existingItemIndex === -1) {
      copyUser.cart.push({
        productid: id,
        quantity: 1,
      });
    } else {
      copyUser.cart[existingItemIndex] = {
        productid: id,
        quantity: copyUser.cart[existingItemIndex].quantity + 1,
      };
    }

    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  return (
    <div className="w-[30%]  mr-3 mb-3 border shawdow" key={product.id}>
      <img
        className="w-full h-[30vh] object-cover"
        src={product.image}
        alt=""
      />
      <h1>{product.title}</h1>
      <h3>{product.description.slice(0, 100)}</h3>
      <div className="p-3 mt-3 flex justify-between items-center">
        <h3>{product.price}</h3>
        <h3>{product.category}</h3>
        <button onClick={() => addToCarHandler(product.id)}>Add to Cart</button>
      </div>
      <Link to={`/product/${product.id}`}>More Details</Link>
    </div>
  );
};

export default ProductTemplate;

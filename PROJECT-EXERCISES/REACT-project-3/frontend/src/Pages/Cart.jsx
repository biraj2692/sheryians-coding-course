import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/Actions/UserAction";

const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.data);
  const products = useSelector((state) => state.products.data);

  const increaseQuantity = (index) => {
    const copyUser = { ...user, cart: [...user.cart] };

    copyUser.cart[index] = {
      productid: copyUser.cart[index].productid,
      quantity: copyUser.cart[index].quantity + 1,
    };

    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };
  
  const decreaseQuantity = (index) => {
    const copyUser = { ...user, cart: [...user.cart] };

    if(user.cart[index].quantity > 1) {
      copyUser.cart[index] = {
        productid: copyUser.cart[index].productid,
        quantity: copyUser.cart[index].quantity - 1,
      };
    } else {
      copyUser.cart = copyUser.cart.filter((_, i) => i !== index);
    }

    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const removeItem = (index) => {
    const copyUser = { ...user, cart: [...user.cart] };
    copyUser.cart = copyUser.cart.filter((_, i) => i !== index);
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  if (!user || !user.cart || user.cart.length === 0) {
    return <div className="text-center p-5">Your cart is empty</div>;
  }

  // Calculate total
  const calculateTotal = () => {
    return user.cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.productid);
      return total + (product ? product.price * item.quantity : 0);
    }, 0).toFixed(2);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {user.cart.map((item, index) => {
          const product = products.find(p => p.id === item.productid);
          if (!product) return null;
          
          return (
            <li key={index} className="flex items-center border p-3 rounded">
              <img src={product.image} alt="" className="w-20 h-20 object-cover mr-4" />
              <div className="flex-1">
                <h3 className="font-bold">{product.title}</h3>
                <p className="text-gray-400">${product.price}</p>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => decreaseQuantity(index)}
                  className="px-3 py-1 bg-gray-700 rounded"
                >-</button>
                <span className="mx-3">{item.quantity}</span>
                <button 
                  onClick={() => increaseQuantity(index)}
                  className="px-3 py-1 bg-gray-700 rounded"
                >+</button>
                <button 
                  onClick={() => removeItem(index)}
                  className="ml-4 px-3 py-1 bg-red-600 rounded"
                >Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">
          Total: ${calculateTotal()}
        </p>
      </div>
    </div>
  );
};

export default Cart;

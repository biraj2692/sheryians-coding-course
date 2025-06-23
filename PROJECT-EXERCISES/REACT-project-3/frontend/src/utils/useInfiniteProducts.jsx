import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api/axiosconfig";
import { loadLazyProducts } from "../store/Reducer/ProductsSlice";

const useInfiniteProducts = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.data);
  const [hasMore, setHasMore] = useState(true);
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=6&_start=${product.length}`
      );
      if (data.length == 0) {
        setHasMore(false);
      } else {
        dispatch(loadLazyProducts(data));
      }
    } catch (error) {
      setHasMore(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return {product, hasMore, fetchProducts};
};

export default useInfiniteProducts;

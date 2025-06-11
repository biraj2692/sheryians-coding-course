import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  asyncCreateProducts,
  asyncDeleteProducts,
  asyncUpdateProducts,
  asyncLoadProducts,
} from "../../store/Actions/productAction";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.data);
  const users = useSelector((state) => state.users.data);

  const product = products?.find((product) => product.id == id);
  console.log(products, users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncLoadProducts());
  }, [dispatch]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description,
    },
  });

  const updateProductHandler = (product) => {
    dispatch(asyncUpdateProducts(id, product));
    navigate("/products");
  };

  const deleteHandler = (id) => {
    dispatch(asyncDeleteProducts(id));
    navigate("/products");
  };

  return product ? (
    <>
      <div
        className="w-full flex  p-3 gap-4  mr-3 mb-3 border shawdow"
        key={product.id}
      >
        <img
          className="w-1/2 h-[40vh] object-cover rounded-[2rem]"
          src={product.image}
          alt=""
        />
        <div className="w-1/2 h-1/2">
          <h1>{product.title}</h1>
          <h3>{product.description}</h3>
          <div className="p-3 mt-3 flex justify-between items-center">
            <h3>{product.price}</h3>
            <h3>{product.category}</h3>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <hr />
      {users && users.isAdmin && (
        <form
          onSubmit={handleSubmit(updateProductHandler)}
          className="flex flex-col w-1/2"
        >
          <input
            type="text"
            className="mb-3 outline-0 border-b p-2 "
            placeholder="Asus tuf a15"
            {...register("title")}
          />
          <textarea
            name=""
            id=""
            className="mb-3 outline-0 border-b p-2 "
            placeholder="description"
            {...register("description")}
          />
          <input
            type="number"
            className="mb-3 outline-0 border-b p-2 "
            placeholder="0.00"
            {...register("price")}
          />
          <input
            type="text"
            className="mb-3 outline-0 border-b p-2 "
            placeholder=""
            {...register("category")}
          />
          <input
            type="url"
            className="mb-3 outline-0 border-b p-2 "
            placeholder="Image URL"
            {...register("image")}
          />
          <button className="mt-3 px-3 py-4 bg-blue-400 rounded">
            Update Product
          </button>
          <button
            onClick={() => deleteHandler(id)}
            className="mt-3 px-3 py-4 bg-red-400 rounded"
          >
            Delete Product
          </button>
        </form>
      )}
    </>
  ) : (
    <div>Loading....</div>
  );
};

export default ProductDetail;

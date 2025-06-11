import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncCreateProducts } from "../../store/Actions/productAction";

const CreateProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const addProductHandler = (product) => {
    dispatch(asyncCreateProducts(product));
  };

  return(
    <form
      onSubmit={handleSubmit(addProductHandler)}
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
        Create Product
      </button>
    </form>
  )
};

export default CreateProduct;

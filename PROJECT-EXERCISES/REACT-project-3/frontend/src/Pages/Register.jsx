import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/Actions/UserAction";
import { useDispatch } from "react-redux";
const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const registerHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    dispatch(asyncRegisterUser(user));
    navigate("/login");
  };

  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="flex flex-col w-1/2"
    >
      <input
        type="text"
        className="mb-3 outline-0 border-b p-2 "
        placeholder="John Doe"
        {...register("name")}
      />
      <input
        type="text"
        className="mb-3 outline-0 border-b p-2 "
        placeholder="john1234"
        {...register("username")}
      />
      <input
        type="email"
        className="mb-3 outline-0 border-b p-2 "
        placeholder="john1234"
        {...register("email")}
      />
      <input
        type="password"
        className="mb-3 outline-0 border-b p-2 "
        placeholder=""
        {...register("password")}
      />
      <input type="submit" className="mt-3 px-3 py-4 bg-blue-400 rounded" />
      <p>Already have an account</p>
      <Link to="/login"> Login Here </Link>
    </form>
  );
};

export default Register;

import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'
import { asyncLoginUser } from "../store/Actions/UserAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = (user) => {
    dispatch(asyncLoginUser(user));
    naviagte('/products')
  };

 return (
    <form onSubmit={handleSubmit(loginHandler)} className="flex flex-col w-1/2">
      <input type="email" className="mb-3 outline-0 border-b p-2 " placeholder="email@example.com" {...register("email")} />
      <input type="password" className="mb-3 outline-0 border-b p-2 " placeholder="password" {...register("password")} />
      <input type="submit" className="mt-3 px-3 py-4 bg-blue-400 rounded" value="Login"/>
      <p>Don't have an account</p>
      <Link to="/register"> Register Here </Link>
    </form>
  );

}

export default Login

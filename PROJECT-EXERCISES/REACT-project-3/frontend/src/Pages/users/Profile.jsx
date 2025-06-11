import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { asyncCurrentUser, asyncDeleteUsers, asyncLogoutUser, asyncUpdateUser } from "../../store/Actions/UserAction";

const Profile = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users.data); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncCurrentUser());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      username: user?.username,
      password: user?.password
    },
  });

  const updateUserProfile = (formData) => {
    console.log("Form data:", formData);
    console.log("User ID:", user?.id);

    if (!user?.id) {
      console.error("User ID is missing!");
      return;
    }

    dispatch(asyncUpdateUser(user.id, formData)); 
  };

  const deleteUserProfile = () => {
    dispatch(asyncDeleteUsers(user.id));
    navigate("/login");
  };
  
  const logoutUserProfile = () => {
    dispatch(asyncLogoutUser());
  };

  return user ? (
    <form
      onSubmit={handleSubmit(updateUserProfile)}
      className="flex flex-col w-1/2 flex-wrap"
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
      <button className="mt-3 px-3 py-4 bg-blue-400 rounded" >Update</button>
      <button className="w-1/2 mt-3 px-3 py-4 bg-red-400 rounded" onClick={deleteUserProfile}>Delete</button>
      <button onClick={logoutUserProfile} className="w-1/2 mt-3 px-3 py-4 bg-red-400 rounded">Logout</button>

    </form>
  ) : (
    <div>Loading</div>
  )
}

export default Profile
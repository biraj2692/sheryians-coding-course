import axios from "../../api/axiosconfig";
import { loadUser, removeUser } from "../Reducer/UserSlice";

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const {data} = await axios.get(
      `/users?email=${user.email}&password=${user.password}`,
      user
    );
     if (data && data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(loadUser(data[0]));
    } else {
      console.error("No user found with those credentials");
    }

  } catch (error) {
    console.error(error);
  }
};
export const asyncLogoutUser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser())
  } catch (error) {
    console.error(error);
  }
};
export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
   const user =JSON.parse(localStorage.getItem("user"));
   if(user) dispatch(loadUser(user))
   else console.log("User Not Found");
   
  } catch (error) {
    console.error(error);
  }
};
export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const {data} = await axios.post("/users", user);
    console.log("Registered user:", data);

    // Optionally auto-login the user after registration
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(loadUser(data));

    return data; // Return the registered user data
  } catch (error) {
    console.error("Error registering user:", error);
    throw error; // Re-throw the error so calling components can handle it
  }
};
export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
  try {
    const {data} = await axios.patch("/users/" + id, user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(loadUser(data));
    return data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const asyncDeleteUsers = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/users/"+id)
    dispatch(asyncLogoutUser());
  } catch (error) {
    console.error(error);
  }
};


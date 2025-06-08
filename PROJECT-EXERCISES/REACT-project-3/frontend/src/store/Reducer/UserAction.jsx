import axios from "../../api/axiosconfig";
import { loadUser } from "./UserSlice";

export const asyncGetProducts = () => async (dispatch, getState) => {
  try {
    console.log("Current State ----> >>>",getState());
    const res = await axios.get("/users");
    // console.log("Load User ---->>>>",res);
    dispatch(loadUser(res.data));
  } catch (error) {
    console.error(error);
  }
};

//Defines actions that can be performed that leads to state changes eg: login, logout

import { axiosReq } from "../utils/consumeAPI";

export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: "REGISTER_USER_REQUEST" });
  try {
    const { data } = await axiosReq.post("/auth/signup", reqData);
    //open modal here asking users to go to their prefered mail provider to verify their email
    dispatch({ type: "AUTH_MODAL_OPEN" });
    dispatch({ type: "REGISTER_USER_SUCCESS", payload: data });
  } catch (error) {
    console.log("Register User Error: ", error);
    dispatch({ type: "REGISTER_USER_FAILURE", payload: error });
  }
};

export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: "LOGIN_USER_REQUEST" });
  try {
    const { data } = await axiosReq.post("/auth/signin", reqData.values);
    console.log(data);
    if (data.jwt) {
      localStorage.setItem("token", data.jwt);
      //navigate to Profile Page
      reqData.navigate("/profile");
    }
    dispatch({ type: "LOGIN_USER_SUCCESS", payload: data });
  } catch (error) {
    console.log("Login User Error: ", error);
    dispatch({ type: "LOGIN_USER_FAILURE", payload: error });
  }
};

export const getUserProfile = () => async (dispatch) => {
  dispatch({ type: "GET_USER_PROFILE_REQUEST" });
  try {
    const { data } = await axiosReq.get("/profile");
    dispatch({ type: "GET_USER_PROFILE_SUCCESS", payload: data });
  } catch (error) {
    console.log("Get User Profile Error: ", error);
    dispatch({ type: "GET_USER_PROFILE_FAILURE", payload: error });
  }
};

export const logoutUser = (navigate) => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT_USER" });
    navigate("/auth/signin");
  } catch (error) {
    console.log("Logout User Error: ", error);
  }
};

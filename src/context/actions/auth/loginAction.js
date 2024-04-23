import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const login = (form) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_LOADING });

    const { userName: username, password } = form;

    let res = await axiosInstance().post("/auth/login", {
      username,
      password,
    });

    let data = await res.data;
    if (data) {
      localStorage.token = data.token;
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: err.response ? err.response.data : "Could not connect",
    });
  }
};

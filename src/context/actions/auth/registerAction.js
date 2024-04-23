import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const register = (form) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_LOADING });

    const {
      firstName: first_name,
      lastName: last_name,
      userName: username,
      email,
      password,
    } = form;

    let res = await axiosInstance().post("/auth/register", {
      first_name,
      last_name,
      username,
      email,
      password,
    });

    let data = await res.data;
    if (data) dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: REGISTER_ERROR,
      payload: err.response ? err.response.data : "Could not connect",
    });
  }
};

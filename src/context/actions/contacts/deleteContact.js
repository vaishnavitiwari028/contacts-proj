import {
  DELETE_CONTACT_ERROR,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const deleteContact = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CONTACT_LOADING, payload: id });
    await axiosInstance().delete(`/contacts/${id}`);
    dispatch({ type: DELETE_CONTACT_SUCCESS, payload: id });
  } catch (err) {
    dispatch({
      type: DELETE_CONTACT_ERROR,
      payload: err.response?.data || "could not connect",
    });
  }
};

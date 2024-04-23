import {
  CONTACTS_ERROR,
  CONTACTS_LOADING,
  CONTACTS_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const getContacts = (history) => async (dispatch) => {
  try {
    dispatch({ type: CONTACTS_LOADING });
    let res = await axiosInstance(history).get("/contacts/");
    let data = res.data;
    dispatch({ type: CONTACTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: CONTACTS_ERROR,
      payload: err.response ? err.response.data : "Could not connect",
    });
  }
};

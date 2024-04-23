import {
  STAR_CONTACT_ERROR,
  STAR_CONTACT_LOADING,
  STAR_CONTACT_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const staringContact = (id, is_favorite) => async (dispatch) => {
  try {
    console.log("r1");
    dispatch({ type: STAR_CONTACT_LOADING, payload: id });
    console.log("r2");
    let res = await axiosInstance().patch(`/contacts/${id}`, { is_favorite });
    console.log("r3");
    let data = await res.data;
    dispatch({ type: STAR_CONTACT_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: STAR_CONTACT_ERROR,
      payload: err.response?.data || "Could not connect",
    });
  }
};

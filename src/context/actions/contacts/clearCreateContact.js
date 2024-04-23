import { CLEAR_CREATE_CONTACT } from "../../../constants/actionTypes";

export const clearCreateContact = () => (dispatch) => {
  dispatch({ type: CLEAR_CREATE_CONTACT });
};

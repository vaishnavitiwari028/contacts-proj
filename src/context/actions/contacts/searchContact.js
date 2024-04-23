import { SEARCH_CONTACTS } from "../../../constants/actionTypes";

export const searchContact = (searchText) => (dispatch) => {
  dispatch({ type: SEARCH_CONTACTS, payload: searchText });
};

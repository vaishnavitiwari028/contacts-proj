import {
  CREATE_CONTACT_ERROR,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";
import { FIREBASE_IMAGE_REF, storage } from "../../../helpers/firebase";

export const createContact = (form) => async (dispatch) => {
  dispatch({ type: CREATE_CONTACT_LOADING });

  const {
    firstName: first_name,
    lastName: last_name,
    userName: username,
    country: country_code,
    isFavourite: is_favorite,
    phoneNumber: phone_number,
    contactPicture: contact_picture,
  } = form;

  const saveToBackend = async (url = null) => {
    try {
      let res = await axiosInstance().post("/contacts/", {
        first_name,
        last_name,
        username,
        country_code,
        is_favorite,
        phone_number,
        contact_picture: url,
      });

      let data = await res.data;
      if (data) dispatch({ type: CREATE_CONTACT_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: CREATE_CONTACT_ERROR,
        payload: err.response ? err.response.data : "Could not connect",
      });
    }
  };

  if (contact_picture) {
    storage
      .ref(`${FIREBASE_IMAGE_REF}/${contact_picture.name}`)
      .put(contact_picture)
      .on(
        "state_changed",
        (snapshot) => {},
        async (err) => {},
        async () => {
          const fileUrl = await storage
            .ref(FIREBASE_IMAGE_REF)
            .child(contact_picture.name)
            .getDownloadURL();
          saveToBackend(fileUrl);
        }
      );
  } else {
    saveToBackend();
  }
};

import {
  CLEAR_CREATE_CONTACT,
  CONTACTS_ERROR,
  CONTACTS_LOADING,
  CONTACTS_SUCCESS,
  CREATE_CONTACT_ERROR,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  DELETE_CONTACT_ERROR,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  LOGOUT_USER,
  SEARCH_CONTACTS,
  STAR_CONTACT_LOADING,
  STAR_CONTACT_SUCCESS,
} from "../../constants/actionTypes";
import contactsInitialState from "../initialStates/contactsInitialState";

const contactsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CONTACTS_LOADING:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: true,
        },
      };
    case CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: payload,
        },
      };
    case CONTACTS_ERROR:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          error: payload,
        },
      };
    case LOGOUT_USER:
      return {
        ...state,
        ...contactsInitialState,
      };

    case CREATE_CONTACT_LOADING:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: true,
        },
      };

    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: [...state.contacts.data, payload],
        },
        addContact: {
          ...state.addContact,
          loading: false,
          data: payload,
        },
      };
    case CREATE_CONTACT_ERROR:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          error: payload,
        },
      };
    case CLEAR_CREATE_CONTACT:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          error: null,
          data: null,
        },
      };

    case SEARCH_CONTACTS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          isSearchActive: payload.length > 0 || false,
          searchedData: state.contacts.data.filter(
            (contact) =>
              contact.first_name.toLowerCase().search(payload.toLowerCase()) !==
                -1 ||
              contact.last_name.toLowerCase().search(payload.toLowerCase()) !==
                -1 ||
              contact.phone_number
                .toLowerCase()
                .search(payload.toLowerCase()) !== -1
          ),
        },
      };

    case DELETE_CONTACT_LOADING:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: state.contacts.data.map((contact) => {
            if (contact.id === payload) {
              return { ...contact, isDeleting: true };
            }
            return contact;
          }),
        },
        deleteConatact: {
          ...state.deleteConatact,
          loading: true,
        },
      };

    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        deleteConatact: {
          ...state.deleteConatact,
          loading: false,
        },
        contacts: {
          ...state.contacts,
          data: state.contacts.data.filter((contact) => contact.id !== payload),
          err: null,
        },
      };
    case DELETE_CONTACT_ERROR:
      return {
        ...state,
        deleteConatact: {
          ...state.deleteConatact,
          loading: false,
        },
        contacts: {
          ...state.contacts,
          err: payload,
        },
      };

    case STAR_CONTACT_LOADING:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: state.contacts.data.map((contact) => {
            if (contact.id === payload) return { ...contact };
            return contact;
          }),
        },
      };
    case STAR_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: state.contacts.data.map((contact) => {
            if (contact.id === payload.id) {
              return { ...contact, ...payload };
            }
            return contact;
          }),
        },
      };
    default:
      return state;
  }
};
export default contactsReducer;

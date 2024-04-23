import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../constants/actionTypes";
import authIntialState from "../initialStates/authIntialState";

const authReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
      return { ...state, auth: { ...state.auth, loading: true } };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: { ...state.auth, loading: false, data: payload },
      };
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      return {
        ...state,
        auth: { ...state.auth, loading: false, error: payload },
      };
    case LOGOUT_USER:
      return {
        ...state,
        ...authIntialState,
      };
    default:
      return state;
  }
};
export default authReducer;

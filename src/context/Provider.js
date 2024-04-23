import { createContext, useReducer } from "react";
import { authInitialState, contactsInitialState } from "./initialStates";
import { authReducer, contactsReducer } from "./reducers";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contactsReducer,
    contactsInitialState
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        contactsState,
        contactsDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

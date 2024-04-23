import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { logout } from "../../context/actions/auth/logoutAction";
import { searchContact } from "../../context/actions/contacts/searchContact";
import { GlobalContext } from "../../context/Provider";
import isAuthenticated from "../../utils/isAuthenticated";
import { SearchInput } from "../../custom-components";
import "./header.css";

const Header = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { contactsDispatch, contactsState, authDispatch } = useContext(
    GlobalContext
  );
  console.log(contactsState);
  const logoutUser = () => {
    let combinedispatch = (action) => {
      contactsDispatch(action);
      authDispatch(action);
    };
    logout(history)(combinedispatch);
  };

  const search = (e) => {
    let searchText = e.target.value.trim().replace(/" "/g, "");
    searchContact(searchText)(contactsDispatch);
  };

  return (
    <div className="header_container">
      <Link to="/" className="title">
        People&Pals
      </Link>
      <div className="search">
        <SearchInput onChange={search} />
      </div>
      {isAuthenticated() ? (
        <>
          <Link className="menu_item" to="/contacts/create">
            Create Contact
          </Link>
          <div className="menu_item" onClick={logoutUser}>
            Log Out
          </div>
        </>
      ) : pathname === "/auth/login" || pathname === "/auth/register" ? null : (
        <>
          <Link className="menu_item" to="/auth/register">
            Register
          </Link>
          <Link className="menu_item" to="/auth/login">
            Sign In
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;

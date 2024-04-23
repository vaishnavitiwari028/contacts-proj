import React from "react";
import "./SearchInput.css";

const SearchInput = ({ icon, ...props }) => {
  return (
    <div>
      {icon && <i className="fas fa-user-edit fa-lg"></i>}{" "}
      <input
        className="search_input"
        placeholder={props.placeholder || "search here"}
        type="text"
        {...props}
      />
    </div>
  );
};

export default SearchInput;

import React from "react";
import { IconButton, ImageThumb } from "../../../custom-components/";
import "./ContactsListUI.css";

const ContactsListUI = ({
  first_name,
  last_name,
  contact_picture,
  country_code,
  phone_number,
  is_favorite,
  id,
  handleDeleteContact,
  handleStaring,
}) => {
  return (
    <div className="contact_container">
      <div>
        <ImageThumb
          firstName={first_name}
          lastName={last_name}
          src={contact_picture}
        />
        {first_name} {last_name}
        {is_favorite && (
          <i className={"fas fa-heart"} style={{ color: "red" }}></i>
        )}
      </div>
      <span>{country_code + " - " + phone_number}</span>
      {/* <i className="fas fa-trash" onClick={() => handleDeleteContact(id)}></i> */}
      <IconButton onClick={() => handleDeleteContact(id)} icon="trash" />
      <button onClick={() => handleStaring(id, !is_favorite)}>
        {is_favorite ? "UNSTAR" : "STAR"}
      </button>
    </div>
  );
};

export default ContactsListUI;

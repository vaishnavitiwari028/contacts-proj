import React, { useContext } from "react";
import { deleteContact } from "../../context/actions/contacts/deleteContact";
import { staringContact } from "../../context/actions/contacts/staringContact";
import { GlobalContext } from "../../context/Provider";
import { Message } from "../../custom-components";
import ContactsListUI from "./ContactsListUI";
import "./ContactsUi.css";

const ContactsUI = ({
  state: {
    contacts: { isSearchActive, loading, data, error, searchedData },
  },
}) => {
  const { contactsDispatch } = useContext(GlobalContext);

  const dataToRender = isSearchActive ? searchedData : data;

  const handleDeleteContact = (id) => {
    deleteContact(id)(contactsDispatch);
  };

  const handleStaring = (id, is_favorite) => {
    console.log(is_favorite);
    staringContact(id, is_favorite)(contactsDispatch);
  };

  if (error) {
    return <div>{error + "!"}</div>;
  }
  return (
    <div className="contactslist_container">
      {!loading && data.length === 0 && searchedData.length === 0 && (
        <Message content="No Contacts Yet" />
      )}
      {isSearchActive && dataToRender.length === 0 && (
        <Message content="No contact to show" />
      )}
      {loading ? (
        <div>Loading Contacts...</div>
      ) : (
        dataToRender
          .filter((contact) => !contact.isDeleting)
          .map(({ ...contact }) => (
            <ContactsListUI
              {...contact}
              key={contact.id}
              handleDeleteContact={handleDeleteContact}
              handleStaring={handleStaring}
            />
          ))
      )}
    </div>
  );
};

export default ContactsUI;

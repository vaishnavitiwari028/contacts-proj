import React from "react";
import useCreateContactForm from "../../../custom-hooks/useCreateContactForm";
import CreateContactUI from "../../../layout/CreateContactUI";

const CreateContactPage = () => {
  return (
    <div>
      <CreateContactUI form={useCreateContactForm()} />
    </div>
  );
};

export default CreateContactPage;

import React, { useRef } from "react";
import { Button, FormHeader, FormInput } from "../../custom-components";
import countriesData from "../../utils/countriesData";
import "./CreateContactUI.css";

const CreateContactUI = ({
  form: {
    onChange,
    createContactLoading,
    isCreateContactFormValid,
    onCreateContactFormSubmit,
    onImageChange,
    tempPreviewImgUrl,
    removeImage,
  },
}) => {
  const imageRef = useRef(null);
  const countriesOptions = countriesData.map(({ text, ...other }) => {
    return { optionText: text, ...other };
  });

  const chooseImage = () => {
    imageRef.current.click();
  };

  return (
    <form
      id="create_contact"
      className="create_contact_form_holder"
      onSubmit={onCreateContactFormSubmit}
    >
      <FormHeader>Create New Contact</FormHeader>
      <input type="file" ref={imageRef} onChange={onImageChange} hidden />

      <div className="contact_image">
        {tempPreviewImgUrl ? (
          <img className="tempImg" src={tempPreviewImgUrl} alt="contactimage" />
        ) : null}

        <div className="image_options">
          {tempPreviewImgUrl ? (
            <div className="image_options_other">
              <div>
                <i onClick={chooseImage} className="fas fa-user-edit fa-lg"></i>
                {"  "}
                <span onClick={chooseImage}> change photo</span>
              </div>
              <i onClick={removeImage} className="fas fa-user-times fa-lg"></i>{" "}
              <span onClick={removeImage}>remove photo</span>
            </div>
          ) : (
            <div className="image_options">
              <i onClick={chooseImage} className="fas fa-user-edit fa-lg"></i>
              <span onClick={chooseImage}>add photo</span>
            </div>
          )}
        </div>
      </div>
      <FormInput onChange={onChange} name="firstName" label="First Name" />
      <FormInput onChange={onChange} name="lastName" label="Last Name" />
      <FormInput
        form="create_contact"
        name="country"
        onChange={onChange}
        elementType="select"
        options={countriesOptions}
        label="Country"
      />

      <FormInput
        onChange={onChange}
        type="tel"
        name="phoneNumber"
        label="PhoneNumber"
      />
      <FormInput
        onChange={onChange}
        name="isFavourite"
        type="checkbox"
        label="Add to favourites"
      />
      {createContactLoading ? (
        <Button type="submit" disabled>
          Loading...
        </Button>
      ) : isCreateContactFormValid ? (
        <Button type="submit">Submit</Button>
      ) : (
        <Button type="submit" disabled>
          Submit
        </Button>
      )}
    </form>
  );
};

export default CreateContactUI;

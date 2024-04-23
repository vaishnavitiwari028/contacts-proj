import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { clearCreateContact } from "../context/actions/contacts/clearCreateContact";
import { createContact } from "../context/actions/contacts/createContact";
import { GlobalContext } from "../context/Provider";
import useForm from "./useForm";

const useCreateContactForm = () => {
  const { form, setForm, onChange, fieldErrors } = useForm();
  const [tempPreviewImgUrl, setTempPreviewImgUrl] = useState(null);
  const history = useHistory();

  const {
    contactsState: {
      addContact: {
        loading: createContactLoading,
        //error: createContactError,
        data: createContactData,
      },
    },
    contactsDispatch,
  } = useContext(GlobalContext);

  //  useEffect(() => {
  //   if (createContactError) {
  //     for (const item in createContactError) {
  //       if (Array.isArray(item)) {
  //         setFieldErrors({
  //           ...fieldErrors,
  //           [item]: createContactError[item][0],
  //         });
  //       } else {
  //         setFieldErrors({ ...fieldErrors, ...createContactError });
  //         break;
  //       }
  //     }
  //   }
  // }, [createContactError]);

  useEffect(() => {
    if (createContactData) {
      history.push("/");
    }
    return () => {
      console.log("clearcontact");
      clearCreateContact()(contactsDispatch);
    };
  }, [createContactData]);

  const isCreateContactFormValid =
    !!form.firstName && !!form.lastName && !!form.country && !!form.phoneNumber;

  const onCreateContactFormSubmit = (e) => {
    e.preventDefault();
    console.log("here");
    if (isCreateContactFormValid) {
      createContact(form)(contactsDispatch);
    }
  };

  const onImageChange = (e) => {
    e.persist();

    let imgFile = e.target.files[0];
    if (imgFile) {
      setForm({ ...form, contactPicture: imgFile });
    }
    let tempImgUrl = URL.createObjectURL(imgFile);

    setTempPreviewImgUrl(tempImgUrl);
  };

  const removeImage = () => {
    setForm({ ...form, contactPicture: null });
    setTempPreviewImgUrl(null);
  };

  return {
    form,
    onChange,
    fieldErrors,
    createContactLoading,
    isCreateContactFormValid,
    onCreateContactFormSubmit,
    onImageChange,
    tempPreviewImgUrl,
    removeImage,
  };
};

export default useCreateContactForm;

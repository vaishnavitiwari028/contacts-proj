import React from "react";
import useForm from "../../custom-hooks/useForm";
import RegisterUI from "../../layout/RegisterUI";
import "./registerPage.css";

const RegisterPage = () => {
  return (
    <div className="register_page">
      <RegisterUI form={useForm()} />
    </div>
  );
};

export default RegisterPage;

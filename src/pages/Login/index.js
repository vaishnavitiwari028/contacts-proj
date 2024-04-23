import React from "react";
import useForm from "../../custom-hooks/useForm";
import LoginUI from "../../layout/LoginUI";
import "./loginPage.css";

const LoginPage = () => {
  return (
    <div className="login_page">
      <LoginUI form={useForm()} />
    </div>
  );
};

export default LoginPage;

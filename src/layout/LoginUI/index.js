import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  FormHeader,
  FormInput,
  Segment,
} from "../../custom-components";
import "./LoginUi.css";

const LoginUI = ({
  form: {
    form,
    onChange,
    isLoginFormValid,
    authLoading,
    onLoginSubmit,
    fieldErrors,
  },
}) => {
  return (
    <form className="form_holder" onSubmit={onLoginSubmit}>
      <FormHeader>Log In to your account</FormHeader>
      {fieldErrors ? (
        <span className="invalid">{fieldErrors?.detail}</span>
      ) : null}
      <FormInput
        id="userName"
        name="userName"
        value={form.userName || ""}
        onChange={onChange}
        type="text"
        label="User Name"
        error={fieldErrors?.username || ""}
      />
      <FormInput
        id="password"
        name="password"
        value={form.password || ""}
        onChange={onChange}
        type="text"
        label="Password"
      />

      {authLoading ? (
        <Button type="submit" disabled>
          Loading...
        </Button>
      ) : isLoginFormValid ? (
        <Button type="submit">Submit</Button>
      ) : (
        <Button type="submit" disabled>
          Submit
        </Button>
      )}
      <Segment>
        need an account ? <Link to="/auth/register">Register</Link>
      </Segment>
    </form>
  );
};

export default LoginUI;

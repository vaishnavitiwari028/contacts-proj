import React from "react";
import "./FormInput.css";

const FormInput = ({
  elementType,
  tagName,
  options,
  label,
  name,
  id,
  error,
  ...otherProps
}) => {
  if (elementType && elementType === "select") {
    return (
      <>
        <div className="form_container">
          {label ? <label htmlFor={name}>{label}</label> : null}
          <select
            id={id}
            name={name}
            value="hello"
            className="input"
            {...otherProps}
          >
            {tagName ? (
              <option className="input" value={tagName}></option>
            ) : null}
            {options.map(({ optionText, ...props }) => (
              <option {...props}>{optionText}</option>
            ))}
          </select>
        </div>
        {error ? <span className="error">{error}</span> : null}
      </>
    );
  }
  return (
    <>
      <div className="form_container">
        {label ? <label htmlFor={name}>{label}</label> : null}
        <input id={id} name={name} {...otherProps} className="input" />
      </div>
      {error ? <span className="error">{error}</span> : null}
    </>
  );
};

export default FormInput;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useField } from "formik";
import React from "react";

const MyInputFirstName = ({ faXmark, faCheck, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="firstName">
      <label htmlFor={props.id || props.name} className="label">
        {label}
      </label>
      <div className="inputContainer">
        <input
          className="text-input"
          {...field}
          {...props}
          required
          minLength={2}
        />
        {meta.touched && meta.error && (
          <div className="error-message">{meta.error}</div>
        )}
        {field.value.length < 3 && (
          <div className="error-message">{faXmark}</div>
        )}
        {field.value.length >= 3 && (
          <div className="no-error-message">{faCheck}</div>
        )}
      </div>
    </div>
  );
};

export default MyInputFirstName;

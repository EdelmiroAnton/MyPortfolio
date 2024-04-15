/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useField } from "formik";
import React from "react";

const MyInput = ({ faXmark, faCheck, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className="label">
        {label}
      </label>
      <div className="inputContainer">
        <input className="text-input" {...field} {...props} required />
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
    </>
  );
};

export default MyInput;

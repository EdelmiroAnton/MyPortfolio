/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useField } from "formik";
import React from "react";

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error-message">{meta.error}</div>
      ) : (
        <div className="no-error-message">Ok!</div>
      )}
    </>
  );
};

export default MyInput;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useField } from "formik";

const MyInputLastName = ({ faXmark, faCheck, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="lastName">
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
        {field.value.length < 2 && (
          <div className="error-message">{faXmark}</div>
        )}
        {field.value.length >= 2 && (
          <div className="no-error-message">{faCheck}</div>
        )}
      </div>
    </div>
  );
};

export default MyInputLastName;

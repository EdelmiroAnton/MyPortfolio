/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useField } from "formik";

const MyEmail = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error && (
        <div className="error-message">{meta.error}</div>
      )}
      {field.value.includes("@") && <div className="no-error-message">OK!</div>}
    </>
  );
};

export default MyEmail;

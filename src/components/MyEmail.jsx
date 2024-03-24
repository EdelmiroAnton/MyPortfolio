/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useField } from "formik";

const MyEmail = ({ label, ...props }) => {
  const [field] = useField(props);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g;
  const testRegex = emailRegex.test(field.value);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {testRegex ? (
        <div className="no-error-message">OK!</div>
      ) : (
        <div className="error-message">Invalid Email</div>
      )}
    </>
  );
};

export default MyEmail;

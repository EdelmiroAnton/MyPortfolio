/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useField } from "formik";

const MyEmail = ({ faXmark, faCheck, label, ...props }) => {
  const [field] = useField(props);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g;
  const testRegex = emailRegex.test(field.value);
  return (
    <>
      <label htmlFor={props.id || props.name} className="label">
        {label}
      </label>
      <input className="text-input" {...field} {...props} required />
      {testRegex ? (
        <div className="no-error-message">{faCheck}</div>
      ) : (
        <div className="error-message">{faXmark}</div>
      )}
    </>
  );
};

export default MyEmail;

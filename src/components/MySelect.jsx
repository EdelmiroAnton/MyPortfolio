/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { ErrorMessage } from "formik";

const MySelect = ({ label, ...props }) => {
  return (
    <div className="selectContainer">
      <label className="label">{label}</label>
      <select {...props} className="select" required>
        <option value="" disabled selected>
          Select a job type
        </option>
        <option value="designer">Designer</option>
        <option value="developer">Developer</option>
        <option value="productManager">Product Manager</option>
        <option value="other">Other</option>
      </select>
      <div className="errorMessage">
        <ErrorMessage name="jobType" />
      </div>
    </div>
  );
};

export default MySelect;

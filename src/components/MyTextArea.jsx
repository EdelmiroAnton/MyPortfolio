/* eslint-disable react/prop-types */
const MyTextArea = ({ label, ...props }) => {
  return (
    <>
      <label className="label">{label}</label>
      <textarea
        {...props}
        cols={30}
        rows={10}
        required
        className="textarea"
      ></textarea>
    </>
  );
};

export default MyTextArea;

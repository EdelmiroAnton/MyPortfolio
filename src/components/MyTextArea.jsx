/* eslint-disable react/prop-types */
const MyTextArea = ({ label, ...props }) => {
  return (
    <div className="textareaContainer">
      <label className="label">{label}</label>
      <textarea
        {...props}
        cols={30}
        rows={10}
        required
        className="textarea"
      ></textarea>
    </div>
  );
};

export default MyTextArea;

/* eslint-disable react/prop-types */
const MyTextArea = ({ label, ...props }) => {
  return (
    <>
      {label}
      <textarea {...props} cols={30} rows={10} required></textarea>
    </>
  );
};

export default MyTextArea;

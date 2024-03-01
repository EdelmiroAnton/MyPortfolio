/* eslint-disable react/prop-types */
import "../assets/styles/button.css";

const Button = ({ children }) => {
  return (
    <button className="btn">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
};

export default Button;

/* eslint-disable react/prop-types */
import "../assets/styles/button.css";

const Button = ({ children }) => {
  return (
    <button className="btn">
      {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Button;

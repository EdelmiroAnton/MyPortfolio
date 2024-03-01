/* eslint-disable react/prop-types */
import "../assets/styles/button.css"

const Button = ({children}) => {
    return (
        <button className='btn'>
            {children}
        </button>
    );
};

export default Button;
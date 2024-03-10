//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

//Styles
import "../assets/styles/backArrow.css";
const BackArrow = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCircleLeft} className="backArrow" />
    </div>
  );
};

export default BackArrow;

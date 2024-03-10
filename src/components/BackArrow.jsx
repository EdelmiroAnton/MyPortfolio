//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

//Styles
import "../assets/styles/backArrow.css";

import { useNavigate } from "react-router-dom";
const BackArrow = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div>
      <FontAwesomeIcon
        icon={faCircleLeft}
        className="backArrow"
        onClick={goBack}
      />
    </div>
  );
};

export default BackArrow;

import { useState } from "react";
import { Link } from "react-router-dom";

//Components
import Loader from "./Loader";
import BackArrow from "./BackArrow";

//Helpers
import { arrayOfProjects } from "../helpers/arrayOfProjects";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptop } from "@fortawesome/free-solid-svg-icons";

//Styles
import "../assets/styles/projects.css";

const Projects = () => {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 1500);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="projects_container">
          <BackArrow />
          <div className="projects_title">PROJECTS</div>
          <div className="grid-container">
            {arrayOfProjects.map((el) => (
              <div className="grid-item" key={el.id}>
                <p className="project_name">{el.project_name}</p>
                <div className="icons">
                  <p className="project_code tooltip">
                    <Link to={el.project_code} target="_blank">
                      <FontAwesomeIcon icon={faCode} />
                    </Link>
                    <div className="tooltiptext">Get the code</div>
                  </p>
                  <p className="project_link tooltip">
                    <Link to={el.project_link} target="_blank">
                      <FontAwesomeIcon icon={faLaptop} />
                    </Link>
                    <div className="tooltiptext">Test the App!</div>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;

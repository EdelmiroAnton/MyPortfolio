import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { arrayOfProjects } from "../helpers/arrayOfProjects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptop } from "@fortawesome/free-solid-svg-icons";

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
          <div className="projects_title">PROJECTS</div>
          <div className="grid-container">
            {arrayOfProjects.map((el) => (
              <div className="grid-item" key={el.id}>
                <p className="project_name">{el.project_name}</p>
                <div className="icons">
                  <p className="project_code">
                    <Link to={el.project_code} target="_blank">
                      <FontAwesomeIcon icon={faCode} />
                    </Link>
                  </p>
                  <p className="project_link">
                    <Link to={el.project_link} target="_blank">
                      <FontAwesomeIcon icon={faLaptop} />
                    </Link>
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

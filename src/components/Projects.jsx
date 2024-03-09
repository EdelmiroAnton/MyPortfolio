import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { arrayOfProjects } from "../helpers/arrayOfProjects";
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
            <div className="projects">
              {arrayOfProjects.map((el) => (
                <div key={el.id}>
                  <p>{el.project_name}</p>
                  <p>
                    <Link to={el.project_code} target="_blank">
                      GITHUB
                    </Link>
                  </p>
                  <p>
                    <Link to={el.project_link} target="_blank">
                      TEST THE PROJECT
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;

import { useState } from "react";
import Loader from "./Loader";
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
          {/* <div>1</div>
          <div>2</div>
          <div>4</div>
          <div>5</div>
          <div>6</div> */}
        </div>
      )}
    </>
  );
};

export default Projects;

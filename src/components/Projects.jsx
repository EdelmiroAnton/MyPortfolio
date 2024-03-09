import { useState } from "react";
import Loader from "./Loader";
import "../assets/styles/projects.css"

const Projects = () => {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 1500);

  return <>{load ? <Loader /> : <div>THIS IS PROJECTS COMPONENT</div>}</>;
};

export default Projects;

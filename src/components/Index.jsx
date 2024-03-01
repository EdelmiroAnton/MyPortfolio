import { Link } from "react-router-dom";
import "../assets/styles/index.css";
import Loader from "./Loader.jsx";

const Index = () => {
  return (
    <>
      <Loader />
      <div className="container">
        <div className="subcontainer">
          <div className="name slide-top">Edelmiro Antón</div>
          <div className="links">
            <div className="about slide-bottom">
              <Link to="/about">About</Link>
            </div>
            <div className="projects slide-bottom">
              <Link to="/projects ">Projects</Link>
            </div>
            <div className="contact slide-bottom">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

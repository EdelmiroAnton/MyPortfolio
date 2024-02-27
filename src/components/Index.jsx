import { Link } from "react-router-dom";
import "../assets/styles/index.css";
const Index = () => {
  return (
    <>
      <div className="container">
        <div className="subcontainer">
          <div className="name">Edelmiro Antón</div>
          <div className="links">
            <div className="about">
              <Link to="/about">About</Link>
            </div>
            <div className="projects">
              <Link to="/projects">Projects</Link>
            </div>
            <div className="contact">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

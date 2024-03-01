import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/index.css";
import Loader from "./Loader";
import Button from "./Button";

const Index = () => {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 2000);
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="subcontainer">
            <div className="name">Edelmiro Antón</div>
            <div className="links">
              <Button>
                <Link to="/about">About</Link>
              </Button>
              <Button className="projects">
                <Link to="/projects ">Projects</Link>
              </Button>
              <Button className="contact">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;

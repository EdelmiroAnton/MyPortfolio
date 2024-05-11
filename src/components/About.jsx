import { useState } from "react";
import Loader from "./Loader";

//Components
import PageTitle from "./PageTitle";
import BackArrow from "./BackArrow";

//Styles
import "../assets/styles/aboutMe.css"

const About = () => {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 1500);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="aboutMe_container">
          <div className="title_container">
            <BackArrow />
            <PageTitle>ABOUT ME</PageTitle>
          </div>
          <p>PERSONAL DESCRIPTION</p>
        </div>
      )}
    </>
  );
};

export default About;

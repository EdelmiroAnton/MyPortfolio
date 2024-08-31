import { useState } from "react";
import Loader from "./Loader";

//Components
import PageTitle from "./PageTitle";
import BackArrow from "./BackArrow";

//Styles
import "../assets/styles/aboutMe.css";

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
          <div className="aboutme_text">
            <p>
              Hi! I’m Edelmiro Antón, an Argentinian Frontend developer based in
              Valencia, Spain 🏖️.
            </p>
            <p>
              My interest in the web development started in 2020 when we were in
              quarantine due to the Covic-19 pandemic 😷. I started studying the
              basis (HTML and CSS) and making small projects to practice 💻.{" "}
            </p>
            <p>
              After that, I learned JS and ReactJS! With this two technologies I
              could create more complex projects and started to learn the
              programming fundamentals 🤓.
            </p>
            <p>
              {" "}
              I realize that as a developer I must be constantly watching the
              last web development technologies applied in the market. Related
              with this, I’m studying Typescript and also MySQL to connect apps
              with the backend.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;

import { useState } from "react";
import Loader from "./Loader";

const About = () => {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 1500);

  return <>{load ? <Loader /> : <div>THIS IS ABOUT COMPONENT</div>}</>;
};

export default About;

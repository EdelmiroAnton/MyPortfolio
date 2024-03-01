import { useState } from "react";
import Loader from "./Loader";

const Contact = () => {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 1500);

  return <>{load ? <Loader /> : <div>THIS IS CONTACT COMPONENT</div>}</>;
};

export default Contact;

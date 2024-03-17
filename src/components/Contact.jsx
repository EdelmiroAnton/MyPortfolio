import { useState } from "react";

//Components
import Loader from "./Loader";
import PageTitle from "./PageTitle";
import BackArrow from "./BackArrow";
const Contact = () => {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 1500);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="contact_container">
          <BackArrow />
          <PageTitle>Contact Me!</PageTitle>
        </div>
      )}
    </>
  );
};

export default Contact;

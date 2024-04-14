import { useState } from "react";

//Components
import Loader from "./Loader";
import PageTitle from "./PageTitle";
import BackArrow from "./BackArrow";
import MyInput from "./MyInput";
import MyEmail from "./MyEmail";
import MyTextArea from "./MyTextArea";
import MySelect from "./MySelect";

//Formik
import { Form, Formik } from "formik";

//Yup
import * as Yup from "yup";

//Fromspree
import { useForm } from "@formspree/react";

//styles
import "../assets/styles/contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [load, setLoad] = useState(true);

  const [state, handleSubmit] = useForm("xpzvoqgp");

  if (state.succeeded) {
    return (
      <div>
        Thanks for your message!
        <Link to={"https://my-portfolio-coral-iota.vercel.app/"}>Go back!</Link>
      </div>
    );
  }

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
          <Formik
            initialValues={{ firstName: "", lastName: "", email: "" }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              message: Yup.string().required("Required"),
              jobType: Yup.string().required("Please, select one option"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {
              // (formik) => (
              <Form
                action="https://formspree.io/f/xpzvoqgp"
                method="POST"
                onSubmit={handleSubmit}
                className="form"
              >
                <MyInput
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                />
                <MyInput
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                />
                <MyEmail
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="youremail@example.com"
                />
                <MyTextArea
                  id="message"
                  name="message"
                  placeholder=" ... "
                  label="Leave me a message!"
                />

                <MySelect
                  label="Job Type"
                  id="jobType"
                  name="jobType"
                  as="select"
                />
                <button type="submit">SUBMIT</button>
              </Form>
              // )
            }
          </Formik>
        </div>
      )}
    </>
  );
};

export default Contact;

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

//Components
import Loader from "./Loader";
import PageTitle from "./PageTitle";
import BackArrow from "./BackArrow";
import MyInputFirstName from "./MyInputFirstName";
import MyInputLastName from "./MyInputLastName";
import MyEmail from "./MyEmail";
import MyTextArea from "./MyTextArea";
import MySelect from "./MySelect";

//Formik
import { Form, Formik } from "formik";

//Yup
import * as Yup from "yup";

//Fromspree
import { useForm } from "@formspree/react";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

//SweetAlert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//styles
import "../assets/styles/contact.css";

const Contact = () => {
  const [load, setLoad] = useState(true);
  const [state, handleSubmit] = useForm("xpzvoqgp");
  const MySwal = withReactContent(Swal);

  if (state.succeeded) {
    return MySwal.fire({
      title: "Thanks for your message!",
      text: "I'll try to answer you as soon as possible :)",
      icon: "success",
      confirmButtonText: `
        <a
          href="https://my-portfolio-coral-iota.vercel.app/"
          style="color: white; text-decoration: none">
          Go back!
        </a>
      `,
    });
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
          <PageTitle>CONTACT ME!</PageTitle>
          <div className="form_container">
            <Formik
              initialValues={{ firstName: "", lastName: "", email: "" }}
              validationSchema={Yup.object({
                firstName: Yup.string(),
                lastName: Yup.string(),
                email: Yup.string(),
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
                  <MyInputFirstName
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    faCheck={<FontAwesomeIcon icon={faCheck} />}
                    faXmark={<FontAwesomeIcon icon={faXmark} />}
                  />
                  <MyInputLastName
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    faCheck={<FontAwesomeIcon icon={faCheck} />}
                    faXmark={<FontAwesomeIcon icon={faXmark} />}
                  />
                  <MyEmail
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="youremail@example.com"
                    faCheck={<FontAwesomeIcon icon={faCheck} />}
                    faXmark={<FontAwesomeIcon icon={faXmark} />}
                  />
                  <MyTextArea
                    id="message"
                    name="message"
                    placeholder="..."
                    label="Leave me a message!"
                  />

                  <MySelect
                    label="Job Type"
                    id="jobType"
                    name="jobType"
                    as="select"
                  />
                  <button type="submit" className="button_submit">
                    SUBMIT
                  </button>
                </Form>
                // )
              }
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

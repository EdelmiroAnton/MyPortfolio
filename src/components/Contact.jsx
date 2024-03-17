import { useState } from "react";

//Components
import Loader from "./Loader";
import PageTitle from "./PageTitle";
import BackArrow from "./BackArrow";

//Formik
import { ErrorMessage, Field, Form, Formik } from "formik";

//Yup
import * as Yup from "yup";

//styles
import "../assets/styles/contact.css";
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
            {(formik) => (
              <Form action="" onSubmit={formik.handleSubmit} className="form">
                <label htmlFor="firstName">First Name</label>
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  placeholder="John"
                />
                <div className="errorMessage">
                  <ErrorMessage name="firstName" />
                </div>

                <label htmlFor="lastName">Last Name</label>
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  placeholder="Doe"
                />
                <div className="errorMessage">
                  <ErrorMessage name="lastName" />
                </div>

                <label htmlFor="email">Email Address</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="Email"
                />
                <div className="errorMessage">
                  <ErrorMessage name="email" />
                </div>

                <label htmlFor="message">How can I help you?</label>
                <Field id="message" name="message" as="textarea" />
                <div className="errorMessage">
                  <ErrorMessage name="message" />
                </div>

                <label htmlFor="jobType">Job Type</label>
                <Field id="jobType" name="jobType" as="select">
                  <option value="">Select a job type</option>
                  <option value="designer">Designer</option>
                  <option value="developer">Developer</option>
                  <option value="productManager">Product Manager</option>
                  <option value="other">Other</option>
                </Field>
                <div className="errorMessage">
                  <ErrorMessage name="jobType" />
                </div>

                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default Contact;

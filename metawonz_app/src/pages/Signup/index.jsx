import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";

import {
  Brand,
  Button,
  Modal,
  SpinnerButton,
  ValidateableField,
} from "../../template";

import { validationSchema } from "../../utils/validationSchema";

import SecureService from "../../services/Secure.service";
import AuthService from "../../services/Auth.service";

const Signup = () => {
  const [isProcess, setProcess] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [modalData, setModalData] = useState({ title: "", message: "" });

  const history = useHistory();

  useEffect(() => {
    SecureService.getCSRFToken();
  }, []);

  const handleSubmit = async (values) => {
    setProcess(true);
    const formValues = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const data = await AuthService.signup(formValues);

    if (data.success) {
      setProcess(false);
      setModalData({
        title: "Registration success",
        message:
          "Your Registration is successfully, if you sign in, please verify your mail!",
      });
      setShowModal(true);
      history.push("/auth/signin");
    }
  };

  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        {/* logo  */}
        <Brand />
        {/* sign up form  */}
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ errors, touched }) => (
            <Form className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg">
              <div className="flex flex-col space-y-3">
                <ValidateableField
                  name="name"
                  type="text"
                  placeholder="Your Name"
                />
                {errors.name && touched.name ? (
                  <div className="text-base text-primary text-center my-6 ">
                    {errors.name}
                  </div>
                ) : null}
                <ValidateableField
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />
                {errors.email && touched.email ? (
                  <div className="text-base text-primary text-center my-6 ">
                    {errors.email}
                  </div>
                ) : null}
                <ValidateableField
                  name="password"
                  type="password"
                  placeholder="Your Password"
                />
                {errors.password && touched.password ? (
                  <div className="text-base text-primary text-center my-6 ">
                    {errors.password}
                  </div>
                ) : null}

                <ValidateableField
                  name="password_confirmation"
                  type="password"
                  placeholder="Confirm Your Password"
                />
                {errors.password_confirmation &&
                touched.password_confirmation ? (
                  <div className="text-base text-primary text-center my-6 ">
                    {errors.password_confirmation}
                  </div>
                ) : null}
              </div>

              {isProcess ? (
                <SpinnerButton />
              ) : (
                <Button text="Sign Up" type="submit" />
              )}

              <Link to="/auth/signin">
                <p className="text-base text-primary text-center my-6 ">
                  Already have an account ?
                </p>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        data={modalData}
        setData={setModalData}
      />
    </main>
  );
};

export default Signup;

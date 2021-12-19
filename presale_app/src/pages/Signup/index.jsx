import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SecureService from "services/Secure.service";

import { Brand, Button } from "template";
import SuccessModal from "template/components/Modals/RegisterSuccessModal";

import { Formik, Form } from "formik";
import { validationSchema } from "utils/validationSchema";
import ValidateableField from "template/components/Form/ValidateableField";
import AuthService from "services/Auth.service";
import Spinner from "template/components/Spinner";

const Signup = () => {
  const [isProcess, setProcess] = useState(null);
  const [showModal, setShowModal] = useState(null);

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

    setProcess(false);

    if (data.success) setShowModal(true);
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
                <button
                  disabled
                  className="  w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins "
                >
                  <div className="inline-flex item-center">
                    <Spinner /> <span className="ml-1">Processing</span>
                  </div>
                </button>
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
      <SuccessModal showModal={showModal} setShowModal={setShowModal} />
    </main>
  );
};

export default Signup;

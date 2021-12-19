import React, { useEffect, useState } from "react";

import { Brand, TextField, Button, Spinner, LoginModal } from "template";

import { Link } from "react-router-dom";
import SecureService from "services/Secure.service";

const Signin = () => {
  const [isProcess, setProcess] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [data, setData] = useState("");

  useEffect(() => {
    SecureService.getCSRFToken();
  }, []);

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  // handle change
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcess(true);
    if (userInput.email == "" || userInput.password == "") {
      setData("Please fill email and password inputs");
      setShowModal(true);
      setProcess(false);
    }
  };

  const Inputs = [
    {
      id: 1,
      type: "email",
      placeholder: "Email",
      value: `${userInput.email}`,
      name: "email",
    },
    {
      id: 2,
      type: "password",
      placeholder: "Password",
      value: `${userInput.password}`,
      name: "password",
    },
  ];
  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        {/* logo  */}
        <Brand />
        {/* sign up form  */}
        <form
          className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-6">
            {Inputs.map((input) => (
              <TextField
                key={input.id}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                name={input.name}
                onChange={handleChange}
              />
            ))}
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
            <Button text="Sign in" type="submit" />
          )}
          <Link to="/auth/signup">
            <p className="text-base text-primary text-center my-6 hover:underline">
              Need an account ?
            </p>
          </Link>
        </form>
      </div>
      <LoginModal
        showModal={showModal}
        setShowModal={setShowModal}
        data={data}
        setData={setData}
      />
    </main>
  );
};

export default Signin;

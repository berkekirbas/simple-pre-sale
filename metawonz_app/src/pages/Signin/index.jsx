import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Brand, TextField, Button, Modal, SpinnerButton } from "../../template";
import AuthService from "../../services/Auth.service";

const Signin = () => {
  const [isProcess, setProcess] = useState(null);

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(null);
  const [modalData, setModalData] = useState({ title: "", message: "" });

  const history = useHistory();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcess(true);

    const formValues = {
      ...userInput,
    };

    if (userInput.email === "" || userInput.password === "") {
      setModalData({
        title: "Hey",
        message: "Please fill email and password inputs",
      });
      setShowModal(true);
      setProcess(false);
    }

    const data = await AuthService.signin(formValues);

    if (!data.success) {
      setProcess(false);
      setModalData({ title: "Hey", message: data.error });
      setShowModal(true);
      return;
    }

    history.push("/");
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
            <SpinnerButton />
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
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        data={modalData}
        setData={setModalData}
      />
    </main>
  );
};

export default Signin;

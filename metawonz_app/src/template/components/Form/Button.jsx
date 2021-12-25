import React from "react";

const Button = ({ text, type, ...rest }) => {
  return (
    <button
      {...rest}
      type={type === "submit" ? "submit" : "button"}
      className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins "
    >
      {text}
    </button>
  );
};

export default Button;

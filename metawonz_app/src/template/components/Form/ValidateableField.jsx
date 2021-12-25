import React from "react";
import { Field } from "formik";

const ValidateableField = ({ ...rest }) => {
  return (
    <Field
      {...rest}
      className="w-full px-4 py-2 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
    />
  );
};

export default ValidateableField;

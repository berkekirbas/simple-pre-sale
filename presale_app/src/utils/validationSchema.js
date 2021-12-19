import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Required Field").max(25, "Maximum 25 Character"),
  email: Yup.string()
    .required("Required Field")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid Mail Address"
    )
    .max(50, "Mail Address length too long"),
  password: Yup.string()
    .required("Required Field")
    .matches(
      /^(?=[^\d_].*?\d)\w(\w|[! @#$%]){6,20}/,
      "Your password must be at least 6-20 characters and contain one special character"
    ),
  password_confirmation: Yup.string()
    .required("Required Field")
    .oneOf([Yup.ref("password"), null], "Passwords don`t match"),
});

import * as Yup from "yup";

export const singnInSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

import * as Yup from "yup";

export const singnInSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

export const addRestaurantSchema = Yup.object({
  restaurantName: Yup.string().required("Please enter restaurant name"),
  address: Yup.string().required("Please enter restaurant address"),
  contact: Yup.string()
    .matches(/^[0-9]+$/, "Contact number must be digits only")
    .required("Please enter the contact number"),
  restaurantOwner: Yup.string().required(
    "Please enter the name of restaurant owner"
  ),
  ownerContactDetails: Yup.string().required(
    "Please enter the Owner contact details"
  ),
  openingTime: Yup.date().required("Please enter opening time"),
  closingTime: Yup.date().required("Please enter closing time"),
});
export const updateRestaurantSchema = Yup.object({
  restaurantName: Yup.string().required("Please enter restaurant name"),
  address: Yup.string().required("Please enter restaurant address"),
  contact: Yup.string()
    .matches(/^[0-9]+$/, "Contact number must be digits only")
    .required("Please enter the contact number"),
  openingTime: Yup.date().required("Please enter opening time"),
  closingTime: Yup.date().required("Please enter closing time"),
});

export const signUpSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
  phone: Yup.string()
    .required("Please enter your phone number")
    .matches(/(\+977)?[9][6-9]\d{8}$/, "Phone number is not valid"),
  address: Yup.string().required("Please enter your address"),
});

export const employeeSchema = Yup.object({
  firstName: Yup.string().required("Please enter First Name"),
  lastName: Yup.string().required("Please enter Last Name"),
  gender: Yup.string().required("Please enter gender"),
  employeeID: Yup.number()
    .required("Please enter Employee ID")
    .typeError("Employee ID must be a number")
    .positive("Employee ID must be a positive number"),
  address: Yup.string().required("Please enter Address"),
  contact: Yup.string()
    .matches(/(\+977)?[9][6-9]\d{8}$/, "Contact number is not valid")
    .required("Please enter the contact number"),
  shift: Yup.string().required("Please select the shift"),
  designation: Yup.string().required("Please enter the designation"),
  role: Yup.string().required("Please select the role"),
});

export const editEmployeeSchema = Yup.object({
  firstName: Yup.string().required("Please enter First Name"),
  lastName: Yup.string().required("Please enter Last Name"),
  gender: Yup.string().required("Please enter gender"),
  contact: Yup.string()
    .matches(/(\+977)?[9][6-9]\d{8}$/, "Contact number is not valid")
    .required("Please enter the contact number"),
  shift: Yup.string().required("Please select the shift"),
  designation: Yup.string().required("Please enter the designation"),
});

export const addCategorySchema = Yup.object({
  category: Yup.string().required("Please enter the category"),
  name: Yup.string().required("Please enter the name"),
  price: Yup.number()
    .required("Please enter the price")
    .typeError("Price must a number")
    .positive("Price must not be nagative"),
});

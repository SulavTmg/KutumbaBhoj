import * as Yup from "yup";
export const singnInSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

export const addRestaurantSchema = Yup.object({
  restaurantName: Yup.string().required("Please restaurant name"),
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
  logo: Yup.mixed().required("Logo is required"),
  image: Yup.mixed().required("Image is required"),
});

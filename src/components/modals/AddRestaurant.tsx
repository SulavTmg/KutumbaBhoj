import Header from "../common/Header";
import Button from "../Button";
import Input from "../form_elements/Input";
import { useFormik } from "formik";
import { useState } from "react";
import { addRestaurantSchema } from "../../schemas";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import Exclamation from "../common/icon/Exclamation";
import assets from "../../assets/assets";
import Dropzone from "../dropzone/Dropzone";
import { RestaurantDetails } from "../../types/restaurant";
import { globalStore, restaurantStore } from "../../store";
import moment from "moment";
import toast from "react-hot-toast";

const initialValues: RestaurantDetails = {
  restaurantName: "",
  address: "",
  contact: "",
  restaurantOwner: "",
  ownerContactDetails: "",
  openingTime: "",
  closingTime: "",
  openingHours: "",
};

const AddRestaurant = () => {
  const [resetFiles, setResetFiles] = useState(false);
  const [logoId, setLogoId] = useState<number | null>(null);
  const [imageId, setImageId] = useState<number | null>(null);

  const handleReset = () => {
    resetForm();
    setResetFiles(true);
    setTimeout(() => setResetFiles(false), 0);
  };

  const formatedTime = (time: moment.Moment) => {
    return time.minutes() === 0 ? time.format("h A") : time.format("h:mm A");
  };

  const {
    icons: { DownIcon, BackArrow },
  } = assets;

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: addRestaurantSchema,
    onSubmit: async (values) => {
      const imgIds: number[] = [];
      if (logoId) imgIds.push(logoId);
      if (imageId) imgIds.push(imageId);
      const restaurantData = {
        contact: values.contact,
        address: values.address,
        imageIds: imgIds,
        name: values.restaurantName,
        openingHours: `${formatedTime(
          moment(values.openingTime)
        )} - ${formatedTime(moment(values.closingTime))}`,
      };
      const response = await restaurantStore
        .getState()
        .addRestaurant(restaurantData);
      const error = globalStore.getState().error;
      if (response) {
        toast.success("Restaurant added successfully");
        handleReset();
      } else {
        toast.error(error);
      }
    },
  });

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="Add Restaurant"
          className="!text-[#5C59E8]"
          icon={BackArrow}
          path="/restaurants"
          btnName="Go Back"
        />
      </div>
      <div className="p-10">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex gap-8">
            <Dropzone
              className="flex flex-col items-center justify-center w-full h-min"
              fieldName="logo"
              resetFile={resetFiles}
              setImageId={setLogoId}
            />
            <Dropzone
              className="flex flex-col items-center justify-center w-full h-min"
              fieldName="image"
              resetFile={resetFiles}
              setImageId={setImageId}
            />
          </div>
          <div>
            <Input
              name="restaurantName"
              type="text"
              placeholder="Restaurant Name"
              className=" w-full h-[56px] border rounded-[10px]"
              value={values.restaurantName}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.restaurantName && touched.restaurantName
                  ? `${errors.restaurantName}`
                  : null
              }
            />
          </div>
          <div>
            <Input
              name="address"
              type="text"
              placeholder="Address"
              className="w-full h-[56px] border rounded-[10px]"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.address && touched.address ? `${errors.address}` : null
              }
            />
          </div>
          <div>
            <Input
              name="contact"
              type="text"
              placeholder="Contact Details"
              className="w-full h-[56px] border rounded-[10px]"
              value={values.contact}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.contact && touched.contact ? `${errors.contact}` : null
              }
            />
          </div>
          <div>
            <Input
              name="restaurantOwner"
              type="text"
              placeholder="Restaurant Owner"
              className="w-full h-[56px] border rounded-[10px]"
              value={values.restaurantOwner}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.restaurantOwner && touched.restaurantOwner
                  ? `${errors.restaurantOwner}`
                  : null
              }
            />
          </div>
          <div>
            <Input
              name="ownerContactDetails"
              type="text"
              placeholder="Owner Contact Details"
              className="w-full h-[56px] border rounded-[10px]"
              value={values.ownerContactDetails}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.ownerContactDetails && touched.ownerContactDetails
                  ? `${errors.ownerContactDetails}`
                  : null
              }
            />
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-full relative">
              <Flatpickr
                name="openingTime"
                className="h-[56px] border rounded-[10px] px-4"
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "h:i K",
                  time_24hr: false,
                }}
                value={values.openingTime}
                onChange={(date) => setFieldValue("openingTime", date[0])}
                onBlur={handleBlur}
                placeholder="Opening Time"
              />
              <img
                src={DownIcon}
                className="size-2 right-4 top-6 absolute pointer-events-none"
              />
              {errors.openingTime && touched.openingTime && (
                <div className="flex items-center text-[#CC3D3D] text-xs mt-1">
                  <Exclamation
                    fill="red"
                    width="11px"
                    className="mr-1 flex-shrink-0 border-[#CC3D3D]"
                  />
                  <span className="text-[#CC3D3D] text-[10px] mt-px leading-tight">
                    {errors.openingTime}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col w-full relative">
              <Flatpickr
                name="closingTime"
                className="w-full h-[56px] border rounded-[10px] px-4"
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "h:i K",
                  time_24hr: false,
                }}
                value={values.closingTime}
                onChange={(date) => setFieldValue("closingTime", date[0])}
                onBlur={handleBlur}
                placeholder="Closing Time"
              />
              <img
                src={DownIcon}
                className="size-2 right-4 top-6 absolute pointer-events-none"
              />
              {errors.closingTime && touched.closingTime && (
                <div className="flex items-center text-[#CC3D3D] text-xs mt-1">
                  <Exclamation
                    fill="red"
                    width="11px"
                    className="mr-1 flex-shrink-0 border-[#CC3D3D]"
                  />
                  <span className="text-[#CC3D3D] text-[10px] mt-px leading-tight">
                    {errors.closingTime}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex justify-end gap-3 mt-6">
              <Button
                type="button"
                onClick={handleReset}
                name="Cancel"
                className="!bg-white !text-[#16151C] border h-[50px] w-24 font-light rounded-[10px]"
              />
              <Button
                name="Save"
                className="!bg-[#121BC6] text-white h-[50px] w-24 font-light rounded-[10px]"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;

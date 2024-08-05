import Header from "../common/Header";
import Button from "../Button";
import Input from "../form_elements/Input";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { updateRestaurantSchema } from "../../schemas";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import Exclamation from "../common/icon/Exclamation";
import assets from "../../assets/assets";
import Dropzone from "../dropzone/Dropzone";
import { globalStore, restaurantStore } from "../../store";
import moment from "moment";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const EditRestaurant = () => {
  const [resetFiles, setResetFiles] = useState(false);
  const [logoId, setLogoId] = useState<number | null>(null);
  const [imageId, setImageId] = useState<number | null>(null);
  const { id } = useParams();
  const Id = Number(id);

  useEffect(() => {
    (async () => {
      await restaurantStore.getState().getRestaurant(Id);
    })();
  }, [Id]);

  const { restaurant } = restaurantStore();

  const formatedTime = (time: moment.Moment) => {
    return time.minutes() === 0 ? time.format("h A") : time.format("h:mm A");
  };

  const {
    icons: { DownIcon, BackArrow },
  } = assets;

  const timeString = restaurant?.OpeningHours || "";
  const [openingTime, closingTime] = timeString
    .split("-")
    .map((time) => time.trim());

  const parsedOpeningTime = moment(
    openingTime,
    ["h A", "h:mm A"],
    true
  ).isValid()
    ? moment(openingTime, ["h A", "h:mm A"]).toDate()
    : new Date();
  const parsedClosingTime = moment(
    closingTime,
    ["h A", "h:mm A"],
    true
  ).isValid()
    ? moment(closingTime, ["h A", "h:mm A"]).toDate()
    : new Date();

  const initialValues = {
    restaurantName: restaurant?.Name || "",
    address: restaurant?.Address || "",
    contact: restaurant?.Contact || "",
    restaurantOwner: "",
    ownerContactDetails: "",
    openingTime: parsedOpeningTime,
    closingTime: parsedClosingTime,
  };

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
    enableReinitialize: true,
    validationSchema: updateRestaurantSchema,
    onSubmit: async (values) => {
      const imgIds: number[] = [];

      if (logoId !== null) {
        imgIds.push(logoId);
      } else if (restaurant?.Images[0]?.Id) {
        imgIds.push(Number(restaurant.Images[0].Id));
      }

      if (imageId !== null) {
        imgIds.push(imageId);
      } else if (restaurant?.Images[1]?.Id) {
        imgIds.push(Number(restaurant.Images[1].Id));
      }

      const restaurantData = {
        id: Id,
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
        .updateRestaurant(restaurantData);
      const error = globalStore.getState().error;
      if (response) {
        toast.success("Restaurant updated successfully");
        handleReset();
      } else {
        toast.error(error);
      }
    },
  });
  const handleReset = async () => {
    resetForm();
    setResetFiles(true);
    setTimeout(() => setResetFiles(false), 0);
    await restaurantStore.getState().getRestaurant(Id);
  };

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="Edit Restaurant"
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
              previewUrl={restaurant?.Images[0]?.Url || ""}
            />
            <Dropzone
              className="flex flex-col items-center justify-center w-full h-min"
              fieldName="image"
              resetFile={resetFiles}
              setImageId={setImageId}
              previewUrl={restaurant?.Images[1]?.Url || ""}
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
                    {errors.openingTime as string}
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
                    {errors.closingTime as string}
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

export default EditRestaurant;

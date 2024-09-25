import toast from "react-hot-toast";
import Input from "../form_elements/Input";
import Dropzone from "../dropzone/Dropzone";
import Header from "../common/Header";
import assets from "../../assets/assets";
import Button from "../Button";
import { useFormik } from "formik";
import { addMenuItemSchema } from "../../schemas";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalStore } from "../../store";
import { useService } from "../../providers/ServiceProvider";
import { AddItem } from "../../types/menu";

const AddMenuItem = () => {
  const [resetFiles, setResetFiles] = useState(false);
  const [imageId, setImageId] = useState<number | null>(null);
  const { restaurantId, categoryId } = useParams<{
    restaurantId: string;
    categoryId: string;
  }>();
  const navigate = useNavigate();
  const { menuService } = useService();
  const {
    icons: { BackArrow },
  } = assets;

  const initialValues = {
    name: "",
    price: "",
  };

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: addMenuItemSchema,
    onSubmit: async (values) => {
      const imgIds: number[] = [];
      if (imageId) imgIds.push(imageId);
      const itemData: AddItem = {
        RestaurantId: Number(restaurantId),
        CategoryId: Number(categoryId),
        Name: values.name,
        Price: Number(values.price),
        ImageIds: imgIds,
      };
      const response = await menuService.addItem(itemData);
      const error = useGlobalStore.getState().error;
      if (response) {
        await menuService.getMenu(Number(restaurantId));
        toast.success("Category added successfully");
        navigate(`/menu/${restaurantId}`);
      } else {
        toast.error(error);
      }
    },
  });

  const handleReset = () => {
    resetForm();
    setResetFiles(true);
    setTimeout(() => setResetFiles(false), 0);
  };

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="Add Menu Item"
          btnName="Go Back"
          className="!text-[#5C59E8]"
          path={`/menu/${restaurantId}`}
          icon={BackArrow}
        />
      </div>
      <div className="p-10">
        <form className="w-full flex flex-col gap-8" onSubmit={handleSubmit}>
          <div>
            <Dropzone
              className="flex flex-col items-center justify-center w-full h-min"
              fieldName="image"
              resetFile={resetFiles}
              setImageId={setImageId}
            />
          </div>
          <div>
            <Input
              name="name"
              type="text"
              placeholder="Name"
              className="w-full h-[56px] border rounded-[10px]"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={errors.name && touched.name ? `${errors.name}` : null}
            />
          </div>
          <div>
            <Input
              name="price"
              type="text"
              placeholder="Price"
              className="w-full h-[56px] border rounded-[10px]"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.price && touched.price ? `${errors.price}` : null
              }
            />
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

export default AddMenuItem;

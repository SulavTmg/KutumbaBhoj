import { useFormik } from "formik";
import Input from "../form_elements/Input";
import { addCategorySchema } from "../../schemas";
import Dropzone from "../dropzone/Dropzone";
import Button from "../Button";
import { useState } from "react";
import Header from "../common/Header";
import { useParams } from "react-router-dom";
import assets from "../../assets/assets";
import { globalStore, menuStore } from "../../store";
import toast from "react-hot-toast";

const AddMenuCategory = () => {
  const [resetFiles, setResetFiles] = useState(false);
  const [imageId, setImageId] = useState<number | null>(null);
  const { id } = useParams<{ id: string }>();

  const handleReset = () => {
    resetForm();
    setResetFiles(true);
    setTimeout(() => setResetFiles(false), 0);
  };

  const {
    icons: { BackArrow },
  } = assets;

  const initialValues = {
    category: "",
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
    validationSchema: addCategorySchema,
    onSubmit: async (values) => {
      const imgIds: number[] = [];
      if (imageId) imgIds.push(imageId);
      const categoryData = {
        RestaurantId: Number(id),
        Category: values.category,
        Name: values.name,
        Price: Number(values.price),
        ImageIds: imgIds,
      };
      const response = await menuStore.getState().addCategory(categoryData);
      const error = globalStore.getState().error;
      if (response) {
        toast.success("Category added successfully");
        handleReset();
      } else {
        toast.error(error);
      }
      console.log(categoryData);
    },
  });

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="Add Category"
          btnName="Go Back"
          className="!text-[#5C59E8]"
          path={`/menu/${id}`}
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
              name="category"
              type="text"
              placeholder="Category"
              className="w-full h-[56px] border rounded-[10px]"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMsg={
                errors.category && touched.category
                  ? `${errors.category}`
                  : null
              }
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

export default AddMenuCategory;

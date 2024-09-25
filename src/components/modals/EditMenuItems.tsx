import toast from "react-hot-toast";
import Input from "../form_elements/Input";
import Dropzone from "../dropzone/Dropzone";
import Header from "../common/Header";
import assets from "../../assets/assets";
import Button from "../Button";
import { useFormik } from "formik";
import { addCategorySchema } from "../../schemas";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalStore, useMenuStore } from "../../store";
import { ItemDetails } from "../../types/menu";
import { useService } from "../../providers/ServiceProvider";

const EditMenuItems = () => {
  const [resetFiles, setResetFiles] = useState(false);
  const [imageId, setImageId] = useState<number | null>(null);
  const { id } = useParams();
  const Id = Number(id);
  const navigate = useNavigate();
  const {menuService} = useService();
  useEffect(() => {
    (async () => {
      await menuService.getItem(Id);
    })();
  }, [Id, menuService]);

  const item = useMenuStore((state) => state.item);
  const {
    icons: { BackArrow },
  } = assets;

  const initialValues = {
    name: item?.Name || "",
    price: item?.Price || "",
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
    enableReinitialize: true,
    validationSchema: addCategorySchema,
    onSubmit: async (values) => {
      const imgIds: number[] = [];
      if (imageId) {
        imgIds.push(imageId);
      } else if (item?.Images?.[0]?.Id) {
        imgIds.push(item.Images[0].Id);
      }

      const itemData: ItemDetails = {
        Id: Id,
        RestaurantId: item?.RestaurantId,
        CategoryId: Number(item?.CategoryId),
        Name: values.name,
        Price: Number(values.price),
      };

      if (imgIds.length > 0) {
        itemData.ImageIds = imgIds;
      }

      const response = await menuService.updateItem(itemData);
      const error = useGlobalStore.getState().error;
      if (response) {
        toast.success("Successfully updated");
        navigate(`/menu/${item?.RestaurantId}`);
      } else {
        toast.error(error);
      }
    },
  });

  const handleReset = () => {
    resetForm();
    setResetFiles(true);
    setImageId(null);
    setTimeout(() => setResetFiles(false), 0);
  };

  if (useGlobalStore.getState().loading) return <div>Loading...</div>;

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="Edit Items"
          btnName="Go Back"
          className="!text-[#5C59E8]"
          path={`/menu/${item?.RestaurantId}`}
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
              previewUrl={item?.Images[0]?.Url || ""}
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

export default EditMenuItems;

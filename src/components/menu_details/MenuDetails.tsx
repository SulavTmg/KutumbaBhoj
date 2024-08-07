import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import assets from "../../assets/assets";
import Button from "../Button";
import MenuLists from "./MenuLists";
import { menuStore } from "../../store";

const MenuDetails = () => {
  const { id } = useParams<{ id: string }>();
  const {
    icons: { LocationIcon, PhoneIcon, Edit, AddIcon3 },
  } = assets;

  useEffect(() => {
    (async () => {
      await menuStore.getState().getMenu(Number(id));
    })();
  }, [id]);

  const { menu } = menuStore();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  if (!menu) {
    return <div>Loading...</div>;
  }

  const handleItemClick = (item: string) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="w-full">
        <div>
          <img src={``} className="w-full rounded-t-lg" />
        </div>
        <div className="mx-[50px]">
          <div className="py-[30px] border-b flex justify-between">
            <div className="flex gap-4">
              <img
                src={`https://admin.kutumbabazar.com/foodapi${menu.Images[0].Url}`}
                className="size-[100px] object-cover"
              />
              <div className="flex flex-col gap-[10px]">
                <h1 className="font-josefin font-bold text-3xl">{menu.Name}</h1>
                <div className="flex gap-[10px]">
                  <img src={LocationIcon} className="size-6" />
                  <span>{menu.Address}</span>
                </div>
                <div className="flex gap-[10px]">
                  <img src={PhoneIcon} />
                  <span>{menu.Contact}</span>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <Button
                icon={Edit}
                name="Edit"
                className=" bg-[#5C59E8] text-white rounded-[10px] w-[116px] flex gap-[10px] px-7 py-[13px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 mx-[50px] flex gap-12">
        <div className="max-w-[275px] w-full border py-4 rounded-lg h-fit">
          <ul className="flex flex-col">
            {menu.Categories!.map((category, index) => (
              <li
                key={index}
                className={`px-6 py-3 font-josefin ${
                  selectedItem === category.Name
                    ? "bg-[#0E6A39] text-white"
                    : ""
                }  cursor-pointer`}
                onClick={() => handleItemClick(category.Name)}
              >
                <span>{category.Name}</span>
              </li>
            ))}
            <div className="px-6 py-3">
              <Link to={`/menu/add-category/${id}`}>
                <Button
                  type="button"
                  icon={AddIcon3}
                  name="Add Categories"
                  className="text-[#5C59E8] text-[12px] flex items-center gap-2"
                />
              </Link>
            </div>
          </ul>
        </div>
        {selectedItem && (
          <MenuLists
            restaurantId={Number(id)}
            menuLists={
              menu.Categories.find((category) => category.Name === selectedItem)
                ?.Items || []
            }
          />
        )}
      </div>
    </div>
  );
};

export default MenuDetails;

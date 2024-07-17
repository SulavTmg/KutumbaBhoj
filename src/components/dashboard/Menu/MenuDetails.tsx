import { useState } from "react";
import { useParams } from "react-router-dom";
import { restaurants } from "../../../data/restaurants";
import assets from "../../../assets/assets";
import Button from "../../Button";
import MenuLists from "./MenuLists";

const MenuDetails = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find(
    (res) => res.id === parseInt(id as string)
  );
  const { icons:{LocationIcon, PhoneIcon, Edit, AddIcon3} } = assets;

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  if (!restaurant) {
    return <div>No restaurant found</div>;
  }

  const handleItemClick = (item: string) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="w-full">
        <div>
          <img src={restaurant.photo} className="w-full rounded-t-lg" />
        </div>
        <div className="mx-[50px]">
          <div className="py-[30px] border-b flex justify-between">
            <div className="flex gap-4">
              <img src={restaurant.logo2} />
              <div className="flex flex-col gap-[10px]">
                <h1 className="font-josefin font-bold text-3xl">
                  {restaurant.name}
                </h1>
                <div className="flex gap-[10px]">
                  <img src={LocationIcon} className="size-6" />
                  <span>{restaurant.location}</span>
                </div>
                <div className="flex gap-[10px]">
                  <img src={PhoneIcon} />
                  <span>{restaurant.contact}</span>
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
            {restaurant.menu.map((res, index) => (
              <li
                key={index}
                className={`px-6 py-3 font-josefin ${
                  selectedItem === res.item ? "bg-[#0E6A39] text-white" : ""
                }  cursor-pointer`}
                onClick={() => handleItemClick(res.item)}
              >
                <span>{res.item}</span>
              </li>
            ))}
            <div className="px-6 py-3">
              <Button
                icon={AddIcon3}
                name="Add Categories"
                className="text-[#5C59E8] text-[12px] flex items-center gap-2"
              />
            </div>
          </ul>
        </div>
        {selectedItem && (
          <MenuLists
            menuLists={
              restaurant.menu.find((res) => res.item === selectedItem)?.types ||
              []
            }
          />
        )}
      </div>
    </div>
  );
};

export default MenuDetails;

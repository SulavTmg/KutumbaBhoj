import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import assets from "../../assets/assets";
import MenuLists from "./MenuLists";
import { useMenuStore } from "../../store";
import { useService } from "../../providers/ServiceProvider";

const MenuDetails = () => {
  const { id } = useParams<{ id: string }>();
  const ID = Number(id);
  const {
    icons: { LocationIcon, PhoneIcon, Edit, AddIcon3 },
  } = assets;
  const{menuService} = useService();
  useEffect(() => {
    (async () => {
      await menuService.getMenu(Number(ID));
    })();
  }, [ID, menuService]);

  const menu = useMenuStore((state) => state.menu);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  const selectedCategory = menu?.Categories.find(
    (category) => category.Name === selectedItem
  );

  if (!menu) {
    return <div>Loading...</div>;
  }

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
              <button className=" bg-[#5C59E8] text-white rounded-[10px] w-[116px] flex gap-[10px] px-7 py-[13px]">
                <img src={Edit} alt="edit-icon" />
                Edit
              </button>
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
                <button
                  type="button"
                  className="text-[#5C59E8] text-[12px] flex items-center gap-2"
                >
                  <img src={AddIcon3} />
                  Add Categories
                </button>
              </Link>
            </div>
          </ul>
        </div>
        {selectedCategory && (
          <MenuLists
            restaurantId={ID}
            menuLists={selectedCategory?.Items || []}
            categoryId={Number(selectedCategory.Id)}
          />
        )}
      </div>
    </div>
  );
};

export default MenuDetails;

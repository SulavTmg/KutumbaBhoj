import toast from "react-hot-toast";
import assets from "../../assets/assets";
import { menuStore } from "../../store";
import { MenuListsProps } from "../../types/menu";
import Button from "../Button";
import { Link} from "react-router-dom";

const MenuLists = ({ restaurantId, menuLists }: MenuListsProps) => {
  const {
    icons: { AddIcon3 },
  } = assets;

  return (
    <div className="border rounded-lg w-full font-josefin">
      <table className="w-full">
        <thead>
          <tr className="text-xl text-[#0E6A39] font-semibold">
            <th className="text-start p-4">Item Name</th>
            <th className="text-start p-4">Price</th>
            <th className="py-4 pl-4 pr-6 text-end ">Action</th>
          </tr>
        </thead>
        <tbody>
          {menuLists.map((item, index) => (
            <tr key={index}>
              <td className="p-4">{item.Name}</td>
              <td className="p-4">{item.Price}</td>
              <td className="y-4 pl-4 pr-6">
                <div className="gap-6 text-[12px] flex justify-end">
                  <button className="text-[#5C59E8]">
                    <Link to={`/menu/edit-items/${item.Id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={async () => {
                      const response = await menuStore
                        .getState()
                        .removeItem(item.Id);
                      if (response) {
                        toast.success("Successfully removed");
                        await menuStore.getState().getMenu(restaurantId);
                      }
                    }}
                    className="text-[#CC3D3D]"
                  >
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        icon={AddIcon3}
        name="Add Items"
        className="text-[#5C59E8] text-[12px] p-4 flex items-center gap-2"
      />
    </div>
  );
};

export default MenuLists;

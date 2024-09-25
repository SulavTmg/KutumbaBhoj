import toast from "react-hot-toast";
import assets from "../../assets/assets";
import { MenuListsProps } from "../../types/menu";
import { Link } from "react-router-dom";
import { useService } from "../../providers/ServiceProvider";

const MenuLists = ({ restaurantId, menuLists, categoryId }: MenuListsProps) => {
  const {
    icons: { AddIcon3 },
  } = assets;
  const { menuService } = useService();
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
                      const response = await menuService.deleteItem(item.Id);
                      if (response) {
                        await menuService.getMenu(restaurantId);
                        toast.success("Successfully removed");
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
      <Link to={`/menu/add-item/${restaurantId}/${categoryId}`}>
        <button className="text-[#5C59E8] text-[12px] p-4 flex items-center gap-2">
          <img src={AddIcon3} />
          Add Item
        </button>
      </Link>
    </div>
  );
};

export default MenuLists;

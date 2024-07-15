import AddIcon3 from "../../../assets/icons/AddIcons/AddIcon3.svg";
import Button from "../../Button";

interface List {
  name: string;
  price: number;
}

type MenuListsProps = {
  menuLists: List[];
};

const MenuLists = ({ menuLists }: MenuListsProps) => {
  return (
    <div className="border rounded-lg w-[638px] font-josefin">
      <table className="w-full ">
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
              <td className="p-4">{item.name}</td>
              <td className="p-4">{item.price}</td>
              <td className="y-4 pl-4 pr-6">
                <div className="gap-6 text-[12px] flex justify-end">
                  <button className="text-[#5C59E8]">Edit</button>
                  <button className="text-[#CC3D3D]">Remove</button>
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

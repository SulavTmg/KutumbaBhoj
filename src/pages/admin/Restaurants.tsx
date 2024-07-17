import Header from "../../components/dashboard/Header";
import { endUsers as data } from "../../data/endUsers";
import { useState } from "react";
import assets from "../../assets/assets";
import Pagination from "../../components/common/Pagination";

const Restaurants = () => {
  const { icons: {EyeIcon, EditIcon, DeleteIcon} } = assets;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const columns = [
    "Restaurant Name",
    "Contact",
    "Address",
    "Opening Hours",
    "Joined",
    "Action",
  ];

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header heading="End-Users" search={true} />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F9F9FC]">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="text-start font-medium py-[18px] px-6 text-[#333843] text-sm capitalize"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                <td className="py-[22px] px-6 text-sm text-[#667085]">
                  <div className="flex items-center gap-3">
                    <img src={row.img} className="size-[44px]" />
                    <span>{row.name}</span>
                  </div>
                </td>
                <td className="py-[22px] px-6 text-sm text-[#667085]">
                  {row.contact}
                </td>
                <td className="py-[22px] px-6 text-sm text-[#667085]">
                  {row.address}
                </td>
                <td className="py-[22px] px-6 text-sm text-[#667085]">
                  {row.openingHours}
                </td>
                <td className="py-[22px] px-6 text-sm text-[#667085]">
                  {row.joined}
                </td>
                <td className="py-[22px] px-6">
                  <div className="flex gap-2">
                    <button>
                      <img src={EyeIcon} alt="View" />
                    </button>
                    <button>
                      <img src={EditIcon} alt="Edit" />
                    </button>
                    <button>
                      <img src={DeleteIcon} alt="Delete" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 text-sm py-4 flex justify-between items-center">
        <div className="text-[#667085]">
          <span>
            Showing {startIndex + 1}-{Math.min(endIndex, data.length)} of{" "}
            {data.length}
          </span>
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Restaurants;

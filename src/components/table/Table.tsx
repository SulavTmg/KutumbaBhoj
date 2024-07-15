import { useState } from "react";
import assets from "../../assets/assets";
import Pagination from "../common/Pagination";

type TableProps = {
  columns: string[];
  data: { [key: string]: string | number }[];
  actions: boolean;
};

const Table = ({ columns, data, actions }: TableProps) => {
  const { EyeIcon, EditIcon, DeleteIcon } = assets;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
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
              {actions ? (
                <th className="text-start font-medium py-[18px] px-6 text-[#333843] text-sm">
                  Action
                </th>
              ) : (
                ""
              )}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="py-[22px] px-6 text-sm text-[#667085]"
                  >
                    {column === "Created" && typeof row[column] === "string" ? (
                      <div>
                        <div>{(row[column] as string).split("&")[0]}</div>
                        <div>{(row[column] as string).split("&")[1]}</div>
                      </div>
                    ) : (
                      <span
                        className={`${
                          column === "Status"
                            ? row[column] === "Processing"
                              ? "text-[#E46A11] bg-[#FDF1E8] px-3 py-2 rounded-full font-semibold text-sm"
                              : row[column] === "Delivered"
                              ? "text-[#0D894F] bg-[#E7F4EE] px-3 py-2 rounded-full font-semibold text-sm"
                              : "text-[#F04438] bg-[#FEEDEC] px-3 py-2 rounded-full font-semibold text-sm"
                            : ""
                        }`}
                      >
                        {row[column]}
                      </span>
                    )}
                  </td>
                ))}
                {actions ? (
                  <td className="py-[22px] px-6 flex gap-2">
                    <button>
                      <img src={EyeIcon} alt="View" />
                    </button>
                    <button>
                      <img src={EditIcon} alt="Edit" />
                    </button>
                    <button>
                      <img src={DeleteIcon} alt="Delete" />
                    </button>
                  </td>
                ) : (
                  ""
                )}
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
    </>
  );
};

export default Table;

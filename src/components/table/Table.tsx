import { useState } from "react";
import assets from "../../assets/assets";
import Pagination from "../common/Pagination";
import { Restaurant } from "../../types/restaurant";
import { TableProps } from "../../types/table";
import { Employee } from "../../types/employee";
import { Order } from "../../types/order";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  customerRepository,
  employeeRepository,
  orderRepository,
  restaurantRepository,
} from "../../providers/RepositoryProvider";

const Table = ({ columns, data, actions, type, nameId }: TableProps) => {
  const {
    icons: { EyeIcon, EditIcon, DeleteIcon },
  } = assets;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getPath = (type: string, id: number) => {
    switch (type) {
      case "restaurant":
        return `/restaurants/edit-restaurant/${id}`;
      case "customer":
        return `/end-user/edit-endUser/${id}`;
      case "employee":
        return `/employees/edit-employee/${id}`;
      default:
        return "/";
    }
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
                  {column.header}
                </th>
              ))}
              {actions && (
                <th className="text-start font-medium py-[18px] px-6 text-[#333843] text-sm">
                  Action
                </th>
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
                    {type === "restaurant" && column.accessor === "Name" ? (
                      <div className="flex items-center">
                        <img
                          src={`https://admin.kutumbabazar.com/foodapi/${
                            (row as Restaurant).Images[0]?.Url
                          }`}
                          alt={(row as Restaurant).Images[0]?.Name}
                          className="size-11 mr-2"
                        />
                        <span>{(row as Restaurant).Name}</span>
                      </div>
                    ) : type === "order" && column.accessor === "Id" ? (
                      <Link to={`/orders/orderdetails/${row["Id"]}`}>
                        <span className="block text-[#5C59E8] font-semibold">
                          {row["Id"]}
                        </span>
                      </Link>
                    ) : nameId && column.accessor === "Name" ? (
                      <>
                        <span className="text-[#333843]">
                          {(row as Employee)["Name"]}
                        </span>
                        <span className="block text-[#667085]">
                          ID: {row["Id"]}
                        </span>
                      </>
                    ) : column.accessor === "CreatedAt" && type === "order" ? (
                      <div>
                        {(() => {
                          const date = new Date(
                            (row as Order)[column.accessor]
                          );
                          const formattedDate = date.toLocaleDateString();
                          const formattedTime = date.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          });
                          return (
                            <>
                              <div>Date: {formattedDate}</div>
                              <div>Time: {formattedTime}</div>
                            </>
                          );
                        })()}
                      </div>
                    ) : column.accessor === "Joined" ? (
                      <div>
                        {(() => {
                          const date = new Date(
                            (row as Restaurant | Employee)[column.accessor]
                          );
                          const formattedDate = date.toLocaleDateString();
                          const formattedTime = date.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          });
                          return (
                            <>
                              <div>Date: {formattedDate}</div>
                              <div>Time: {formattedTime}</div>
                            </>
                          );
                        })()}
                      </div>
                    ) : (
                      <span
                        className={`${
                          column.accessor === "Status" && type === "order"
                            ? (row as Order)[column.accessor] === "Processing"
                              ? "text-[#E46A11] bg-[#FDF1E8] px-3 py-2 rounded-full font-semibold text-sm"
                              : (row as Order)[column.accessor] === "Delivered"
                              ? "text-[#0D894F] bg-[#E7F4EE] px-3 py-2 rounded-full font-semibold text-sm"
                              : "text-[#F04438] bg-[#FEEDEC] px-3 py-2 rounded-full font-semibold text-sm"
                            : ""
                        }`}
                      >
                        {row[column.accessor as keyof typeof row]}
                      </span>
                    )}
                  </td>
                ))}
                {actions && (
                  <td className="px-6">
                    <div className="flex gap-2">
                      <button>
                        <img src={EyeIcon} alt="View" />
                      </button>
                      <button>
                        <Link to={getPath(type, row["Id"])}>
                          <img src={EditIcon} alt="Edit" />
                        </Link>
                      </button>
                      <button
                        onClick={async () => {
                          switch (type) {
                            case "customer": {
                              const response = await customerRepository.delete(
                                Number(row["Id"])
                              );
                              if (response) {
                                await customerRepository.getAll();
                                toast.success("Successfully deleted");
                              }
                              break;
                            }
                            case "employee": {
                              const response = await employeeRepository.delete(
                                Number(row["Id"])
                              );
                              if (response) {
                                await employeeRepository.getAll();
                                toast.success("Successfully deleted");
                              }
                              break;
                            }
                            case "order": {
                              const response = await orderRepository.delete(
                                Number(row["Id"])
                              );
                              if (response) {
                                await orderRepository.getAll();
                                toast.success("Successfully deleted");
                              }
                              break;
                            }
                            case "restaurant": {
                              const response =
                                await restaurantRepository.delete(
                                  Number(row["Id"])
                                );
                              if (response) {
                                await restaurantRepository.getAll();
                                toast.success("Successfully deleted");
                              }
                              break;
                            }
                          }
                        }}
                      >
                        <img src={DeleteIcon} alt="Delete" />
                      </button>
                    </div>
                  </td>
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

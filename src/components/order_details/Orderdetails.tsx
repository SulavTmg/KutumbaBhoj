import assets from "../../assets/assets";
import Header from "../common/Header";
import { globalStore, orderStore } from "../../store";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import toast from "react-hot-toast";

const Orderdetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statusUpdated, setStatusUpdated] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const {
    icons: { DownArrow, BackArrow },
    imgs: { GoogleMap },
  } = assets;

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await orderStore.getState().getOrder(Number(id));
    })();
    if (statusUpdated) {
      setStatusUpdated(false);
    }
  }, [id, statusUpdated]);

  const { order } = orderStore();

  const updateStatus = async (status: string) => {
    const data = {
      Id: Number(id),
      RestaurantId: order!.RestaurantId,
      Restaurant: order!.Restaurant,
      CustomerId: order!.CustomerId,
      CustomerName: order!.CustomerName,
      Total: order!.Total,
      Payment: order!.Payment,
      CreatedAt: order!.CreatedAt,
      Status: status,
      OrderedItems: order!.OrderedItems,
    };
    const response = await orderStore.getState().updateStauts(data);
    const error = globalStore.getState().error;
    if (response) {
      toast.success("Status updated");
      setIsVisible(false);
      setStatusUpdated(true);
    } else {
      toast.error(error);
      setIsVisible(false);
    }
  };

  if (!order) return <div>Loading...</div>;

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="Order Details"
          icon={BackArrow}
          path="/orders"
          btnName="Go Back"
        />
      </div>
      <div className="flex gap-3 px-6 mb-6">
        <div className="min-w-[600px] border shadow-md rounded-md p-6 flex flex-col gap-12">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-8 h-full">
              <p className=" text-black font-josefin">
                Order No:{" "}
                <span className="font-bold text-[#5C59E8]">{order.Id}</span>
              </p>
              <div>
                <span className="text-sm text-[#667085] font-medium">
                  Created At
                </span>
                <p className="text-sm font-medium pt-2">
                  {moment(order.CreatedAt).format("MMMM Do YYYY, h:mm A")}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 h-full">
              <span className="font-semibold text-[#5C59E8] font-josefin text-center">
                {order.Restaurant}
              </span>
              <div className="text-center">
                <span className="text-sm text-[#667085] font-medium">Name</span>
                <p className="text-sm font-medium pt-2">{order.CustomerName}</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 h-full">
              <div className="relative">
                <div
                  onClick={() => setIsVisible(!isVisible)}
                  className={`left-0 right-0 top-0 bottom-0 fixed inset-0 z-20 ${
                    isVisible ? "visible" : "invisible"
                  }`}
                ></div>
                <button onClick={handleToggle}>
                  <span className=" bg-[#EFEFFD] text-[#5C59E8] px-3 py-1 rounded-full font-semibold text-sm flex w-fit gap-2">
                    {order.Status}
                    <img src={DownArrow} />
                  </span>
                </button>
                {isVisible && (
                  <div className="absolute mt-2 z-20 rounded-lg text-sm text-gray-600 font-semibold bg-white shadow-md w-full">
                    <ul>
                      <li
                        className="py-1 px-3 cursor-pointer hover:text-[#E46A11]"
                        onClick={() => updateStatus("Processing")}
                      >
                        Processing
                      </li>
                      <li
                        className="py-1 px-3 cursor-pointer hover:text-[#0D894F]"
                        onClick={() => updateStatus("Delivered")}
                      >
                        Delivered
                      </li>
                      <li
                        className="py-1 px-3 cursor-pointer hover:text-[#F04438]"
                        onClick={() => updateStatus("Cancelled")}
                      >
                        Cancelled
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="text-end">
                <span className="text-sm text-[#667085] font-medium">
                  Contact No
                </span>
                <p className="text-sm font-medium pt-2">{order.Contact}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FF7272] w-[550px] bg-opacity-20 p-6 rounded-md">
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-sm text-[#C82626] font-medium">
                Delivery Address
              </h1>
              <span className="text-[#930A0A] underline text-sm font-medium">
                Edit
              </span>
            </div>
            <div className="flex gap-5">
              <div className="text-[#667085] text-sm font-medium">
                <ul className="flex flex-col gap-4">
                  <li>Name</li>
                  <li>Address</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="text-sm font-medium">
                <ul className="flex flex-col gap-4">
                  <li>{order.CustomerName}</li>
                  <li>{order.Address}</li>
                  <li>{order.Contact}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-md rounded-md w-full border">
          <h1 className="font-bold font-josefin text-[#ED1C24] mb-3">
            Order Tracking
          </h1>
          <div>
            <img src={GoogleMap} />
          </div>
        </div>
      </div>
      <div className="font-josefin flex gap-4 px-6 pb-6">
        <div className="min-w-[300px] border rounded-md shadow-md">
          <h1 className="font-semibold text-[20px] p-6">Order</h1>
          <ul className="text-xs">
            <ul className="border-b px-5">
              {order.OrderedItems.map((food, index) => (
                <li key={index} className="flex justify-between p-2">
                  <span>{food.MenuItemName}</span>
                  <span>
                    {food.Price}
                    <span>
                      {" x "}
                      {food.Quantity}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <ul className="border-b px-5">
              <li className="flex justify-between p-2">
                <span className="text-[#5C59E8]">Sub Total</span>
                <span className="text-[#CC3D3D]">{order.Total}</span>
              </li>
              <li className="flex justify-between p-2">
                <span className="text-[#5C59E8]">Delivery Charge</span>
                <span>{}</span>
              </li>
            </ul>
            <li className="flex justify-between py-2 px-7">
              <span className="text-[#5C59E8]">Total</span>
              <span className="text-[#CC3D3D]">{order.Total} </span>
            </li>
          </ul>
        </div>
        <div className="min-w-[280px] border rounded-md shadow-md">
          <h1 className="font-semibold text-[20px] p-6">Payment</h1>
          <ul className="text-xs px-5">
            <li className="flex justify-between p-2">
              <span className="text-[#667085]">Payment Method</span>
              <span>Cash On Delivery</span>
            </li>
            <li className="flex justify-between p-2">
              <span className="text-[#667085]">Payment Status</span>
              <span className="text-[#CC3D3D]">{order.Payment}</span>
            </li>
          </ul>
        </div>
        <div className="w-full border rounded-md shadow-md">
          <h1 className="font-semibold text-[20px] p-6">
            Message to the Rider
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Orderdetails;

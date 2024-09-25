import data from "../../data/insightsData.json";

const RankingList = () => {
  return (
    <div className="flex flex-wrap gap-8 font-josefin">
      <div className="flex-grow bg-white rounded-md shadow-md">
        <h2 className=" text-[#000] opacity-50 text-center mb-8 mt-4">
          Frequent Ordering Customer
        </h2>
        <ul className="px-[90px]">
          {data.frequentOrderingCustomers.map((customer) => (
            <li
              key={customer.rank}
              className="flex justify-between items-center mb-5"
            >
              <div>
                <span className="text-sm font-semibold">{customer.name}</span>
                <span className="block text-xs text-[#000] opacity-50">
                  {customer.orders} Orders
                </span>
              </div>
              <div>
                <span className="w-6 text-right mr-2">{customer.rank}</span>
                <span
                  className={`w-6 text-right ${
                    customer.trend === "up"
                      ? "text-[#1FE08F]"
                      : "text-[#FF3E13]"
                  }`}
                >
                  {customer.trend === "up" ? "▲" : "▼"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className=" flex-grow bg-white rounded-md shadow-md">
        <h2 className="text-center text-[#000] opacity-50 mb-8 mt-4">
          Restaurants with Good Reviews
        </h2>
        <ul className="px-[90px]">
          {data.restaurantsWithGoodReviews.map((restaurant) => (
            <li
              key={restaurant.rank}
              className="flex justify-between items-center mb-5"
            >
              <div>
                <span className="text-sm font-semibold">{restaurant.name}</span>
                <span className="block text-xs text-[#000] opacity-50">
                  {restaurant.stars} Stars
                </span>
              </div>
              <div>
                <span className="w-6 text-right mr-2">{restaurant.rank}</span>
                <span
                  className={`w-6 text-right ${
                    restaurant.trend === "up"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {restaurant.trend === "up" ? "▲" : "▼"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RankingList;

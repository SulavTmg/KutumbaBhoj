import Header from "../../components/common/Header";
import Table from "../../components/table/Table";
import { useRestaurantStore } from "../../store";

const Restaurants = () => {
  const restaurants = useRestaurantStore((state) => state.restaurants);
  const setSearchQuery = useRestaurantStore((state) => state.setSearchQuery);

  const columns = [
    {
      header: "Restaurant Name",
      accessor: "Name",
    },
    {
      header: "Contact",
      accessor: "Contact",
    },
    {
      header: "Address",
      accessor: "Address",
    },
    {
      header: "Opening Hours",
      accessor: "OpeningHours",
    },
    {
      header: "Joined",
      accessor: "Joined",
    },
  ];

  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header
          heading="Restaurants"
          search={true}
          path="/restaurants/add-restaurant"
          onSearchChange={setSearchQuery}
        />
      </div>
      <Table
      tableType="Primary"
        type="restaurant"
        columns={columns}
        data={restaurants}
        actions={true}
      />
    </div>
  );
};

export default Restaurants;

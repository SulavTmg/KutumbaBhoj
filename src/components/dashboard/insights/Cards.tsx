import assets from "../../../assets/assets";

const Cards = () => {
  const {
    icons: { Revenue, Orders, Delivered, Cancelled },
  } = assets;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-josefin">
      <div className="p-5 bg-white rounded-lg shadow-md">
        <div className="mb-5">
          <img src={Orders} />
        </div>
        <h1 className="text-lg text-[#667085]">Total Orders</h1>
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-2xl">288</h2>
          <span className="bg-[#00B074] text-[#0D894F] font-semibold bg-opacity-10 rounded-full text-xs py-px px-[6px]">
            20%
          </span>
        </div>
      </div>

      <div className="p-5 bg-white rounded-lg shadow-md">
        <div className="mb-5">
          <img src={Delivered} />
        </div>
        <h1 className="text-lg text-[#667085]">Total Delivered</h1>
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-2xl">250</h2>
          <span className="bg-[#00B074] text-[#0D894F] font-semibold bg-opacity-10 rounded-full text-xs py-px px-[6px]">
            0%
          </span>
        </div>
      </div>

      <div className="p-5 bg-white rounded-lg shadow-md">
        <div className="mb-5">
          <img src={Cancelled} />
        </div>
        <h1 className="text-lg text-[#667085]">Total Cancelled</h1>
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-2xl">38</h2>
          <span className="bg-[#00B074] text-[#0D894F] font-semibold bg-opacity-10 rounded-full text-xs py-px px-[6px]">
            0%
          </span>
        </div>
      </div>

      <div className="p-5 bg-white rounded-lg shadow-md">
        <div className="mb-5">
          <img src={Revenue} />
        </div>
        <h1 className="text-lg text-[#667085]">Total Revenue</h1>
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-2xl">$75,500</h2>
          <span className="bg-[#00B074] text-[#0D894F] font-semibold bg-opacity-10 rounded-full text-xs py-px px-[6px]">
            +10%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;

const TimeNav = () => {
  const time = ["All Time", "12 Months", "30 Days", "7 Days", "24 hours"];
  return (
    <div className=" bg-white rounded-lg w-fit shadow-md">
      <ul className="flex text-sm px-1 py-1">
        {time.map((data, index) => (
          <li className="flex justify-center" key={index}>
            <a
              className={`${
                time[0] === data
                  ? "bg-[#00B074] text-[#00B074] bg-opacity-10"
                  : "text-[#667085]"
              }  px-3 py-1 rounded-md`}
            >
              <span>{data}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeNav;

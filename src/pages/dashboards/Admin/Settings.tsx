import Header from "../../../components/dashboard/Header";

const Settings = () => {
  return (
    <div className="rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_10px] w-full  bg-white border-[rgba(0,0,.125)]">
      <div className="px-6 py-5">
        <Header heading="Settings" search={false} />
        <div className="mx-3 mt-[46px]">
          <ul className="flex flex-col gap-6">
            <li className="">
              <div className="border rounded-lg px-6 py-3">
                <h1 className="font-semibold">Access Control</h1>
                <span className="text-[#808080]">
                  Manage data access and role policies between employees and
                  admin
                </span>
              </div>
            </li>
            <li>
              <div className="border rounded-lg px-6 py-3">
                <h1 className="font-semibold">User Control</h1>
                <span className="text-[#808080]">
                  Create and Edit user login informations
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;

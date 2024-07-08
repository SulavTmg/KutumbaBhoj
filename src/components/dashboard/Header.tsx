import AddIcon from "../common/AddIcon.svg"

type HeaderProps = {
    icon? : string;
    btnName?: string;
    heading: string;
}

const Header = ({ icon, btnName, heading}: HeaderProps) => {
    return (
      <div className=" flex justify-between items-center mb-8">
        <h1 className=" text-xl text-[#ED1C24] font-josefin">{heading}</h1>
        <div>
          <button className="flex items-center bg-[#5C59E8] py-[10px] px-[14px] h-[40px] w-[114px] rounded-lg">
            <img src={icon ? icon : AddIcon} className="mr-[4px]" />
            <span className="text-sm text-white font-semibold tracking-tight">
              {btnName ? btnName : "Add New"}
            </span>
          </button>
        </div>
      </div>
    );
}

export default Header;
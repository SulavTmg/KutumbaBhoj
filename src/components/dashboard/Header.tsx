import { Link } from "react-router-dom";
import assets from "../../assets/assets";

type HeaderProps = {
  icon?: string;
  btnName?: string;
  heading: string;
  className?: string;
  path?: string;
  search?: boolean;
  filter?: boolean;
  subHeading?: string;
  onClick?: () => void;
};

const Header = ({
  icon,
  btnName,
  heading,
  path,
  search,
  filter,
  className = "",
  subHeading,
  onClick,
}: HeaderProps) => {
  const {
    icons: { AddIcon, FilterIcon },
  } = assets;
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className={`text-xl text-[#ED1C24] font-josefin ${className}`}>
          {heading}
        </h1>
        {subHeading && (
          <span className="font-light text-[#808080] text-sm">
            {subHeading}
          </span>
        )}
      </div>
      <div className="flex gap-4">
        {search === true ? (
          <input
            placeholder="Search"
            className="border rounded-[10px] outline-none pl-4 w-[300px] h-[40px] bg-[#FAFAFA]"
          />
        ) : (
          ""
        )}
        {path ? (
          <>
            <Link to={path}>
              <button
                onClick={onClick}
                className="flex items-center bg-[#5C59E8] py-[10px] px-[14px] h-[40px] w-[114px] rounded-lg"
              >
                <img src={icon ? icon : AddIcon} className="mr-[4px]" />
                <span className="text-sm text-white font-semibold tracking-tight">
                  {btnName ? btnName : "Add New"}
                </span>
              </button>
            </Link>
          </>
        ) : (
          ""
        )}

        {filter && (
          <button className="flex items-center py-[10px] px-[14px] h-[40px] border rounded-lg">
            <img src={icon ? icon : FilterIcon} className="mr-[4px]" />
            <span className="text-sm text-[#667085] font-semibold tracking-tight">
              {btnName ? btnName : "Add New"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

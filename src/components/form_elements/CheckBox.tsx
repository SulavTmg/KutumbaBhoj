interface CheckBoxProps {
  label: boolean;
  borderColor?: string;
}

const CheckBox = ({ label, borderColor }: CheckBoxProps) => {
  return (
    <div className="inline-flex items-center">
      <label
        className={`relative flex items-center rounded-full cursor-pointer ${
          label ? "p-3" : "my-[10px]"
        }`}
        htmlFor="check"
      >
        <input
          type="checkbox"
          className={` ${borderColor} before:content[''] peer relative size-4 sm:size-6 cursor-pointer appearance-none rounded-[5px] border-[#0D693C] border checked:bg-[#0D693C] ${
            label
              ? ""
              : "sm:size-5 border-2 rounded-1 checked:bg-[#121BC6]"
          }`}
          id="check"
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4.2 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </label>
      {label && (
        <label
          className="mt-px text-[#16151C] cursor-pointer select-none text-[10px] sm:text-base"
          htmlFor="check"
        >
          Remember Me
        </label>
      )}
    </div>
  );
};
export default CheckBox;

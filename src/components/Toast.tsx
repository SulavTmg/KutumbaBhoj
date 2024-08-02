import assets from "../assets/assets";

const Toast = () => {
  const {
    icons: { TickIcon, CloseIcon },
  } = assets;
  return (
    <div
      id="toast-success"
      className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow"
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg ">
        <img src={TickIcon} />
      </div>
      <div className="ms-3 text-sm font-normal">Item moved successfully.</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <img src={CloseIcon} />
      </button>
    </div>
  );
};

export default Toast;

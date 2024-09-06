import PropTypes from "prop-types";

const Filter = ({ FilterItem }) => {
  return (
    <>
      <div className="fixed bg-black flex justify-center items-center gap-36 py-3 px-10 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg z-10">
        <div className="flex flex-shrink-0 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="35"
            viewBox="0 0 100 100"
            width="35"
          >
            <path
              d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <ul className="flex gap-8 text-xl">
          <li
            className="relative group cursor-pointer"
            onClick={() => FilterItem("All")}
          >
            All
            <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li
            className="relative group cursor-pointer text-red-500"
            onClick={() => FilterItem("Duelist")}
          >
            Duelist
            <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-red-700 to-red-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li
            className="relative group cursor-pointer text-blue-500"
            onClick={() => FilterItem("Controller")}
          >
            Controller
            <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li
            className="relative group cursor-pointer text-yellow-500"
            onClick={() => FilterItem("Initiator")}
          >
            Initiator
            <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li
            className="relative group cursor-pointer text-green-500"
            onClick={() => FilterItem("Sentinel")}
          >
            Sentinel
            <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-green-700 to-green-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
        <button className="bg-gradient-to-r from-red-500 to-red-700 py-1 px-6 rounded-3xl text-white text-lg font-semibold hover:from-red-700 hover:to-red-500">
          Profile
        </button>
      </div>
    </>
  );
};

Filter.propTypes = {
  FilterItem: PropTypes.func,
};

export default Filter;

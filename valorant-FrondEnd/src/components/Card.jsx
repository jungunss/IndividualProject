import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({ data, index }) => {
  const navigate = useNavigate();
  const getRoleColor = (roleName) => {
    switch (roleName) {
      case "Duelist":
        return "text-red-500";
      case "Controller":
        return "text-blue-500";
      case "Sentinel":
        return "text-green-500";
      case "Initiator":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };
  return data.fullPortrait === null ? null : (
    <motion.div
      key={data.displayName}
      layoutId={data.uuid}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "white",
        opacity: 1,
        transition: { duration: "0.1", ease: "easeInOut", delay: 0.1 },
      }}
      className="bg-[#1D1D1D] mx-auto w-[15rem] cursor-pointer shadow-red-900  shadow-lg m-4 rounded-xl"
      onClick={() => navigate(`/agent/${data.uuid}`)}
    >
      <div className="">
        <motion.img
          layout
          src={data.fullPortrait}
          alt={data.displayName}
          loading="lazy"
          className="h-full w-full"
        />
        <div className="md:pl-4 pl-5">
          <h2 className="text-white  pt-5 tracking-[3px] text-3xl">
            {data.displayName}
          </h2>
          <div className="flex flex-wrap items-center py-2">
            <div className="w-5">
              <img
                src={data?.role?.displayIcon}
                alt={data?.role?.displayName}
              />
            </div>
            <span
              className={`${getRoleColor(
                data?.role?.displayName
              )} ml-2 opacity-80 text-xl`}
            >
              {data?.role?.displayName}
            </span>
          </div>
        </div>
        <p className="md:pl-4 pl-4 text-xl pb-2">Abilites</p>
        <div className="md:pl-3 pl-4">
          <div className="w-16 pb-5 justify-between gap-1 flex">
            {data?.abilities?.map((item, index) => {
              if (item?.displayIcon === null) {
                return null;
              }

              return (
                <motion.img
                  whileHover={{
                    backgroundColor: "#20BD5F",
                    opacity: 1,
                    transition: {
                      duration: 0.1,
                      ease: "easeInOut",
                      delay: 0.1,
                    },
                  }}
                  layout
                  src={item?.displayIcon}
                  alt={item.displayName}
                  loading="lazy"
                  key={index}
                  className="bg-[#262626] cursor-pointer md:p-2 w-[18px] md:w-10 rounded-full"
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default Card;

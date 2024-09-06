import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import AbilityCard from "./AbilityCard";
import { request } from "../utils/groq";
import { useState } from "react";

const Agent = ({ data }) => {
  console.log(data);
  const { id } = useParams();
  const [groqAi, setGroqAi] = useState("");

  const handleAi = async () => {
    const AiData = await request(agent.displayName);
    setGroqAi(AiData);
  };

  const agent = data?.find((item) => item?.uuid === id);
  console.log(agent);

  return (
    agent && (
      <div className="md:px-24">
        <h1 className="mt-8  text-4xl tracking-widest hover:underline duration-200 transition-all ease-in-out">
          Agent Details
        </h1>

        <div className=" md:flex block justify-between pt-12 ">
          <div className=" mx-auto h-full w-1/2">
            <img src={agent?.fullPortrait} alt={agent?.displayName} />
          </div>
          <div className="bg-[#1D1D1D]  md:w-[60%] p-5  shadow-gray-900  shadow-lg m-4 rounded-xl">
            <p className="text-4xl pt-5 flex items-center">
              <img
                src={agent?.displayIconSmall}
                className="h-12 w-12 rounded-full"
                alt=""
              />
              <span className="ml-4 text-4xl font-bold tracking-wider">
                {agent?.displayName}
              </span>
            </p>
            <h3 className="text-2xl pt-10">Role —</h3>
            <div className="flex items-center py-2">
              <div className="w-5">
                <img
                  src={agent?.role?.displayIcon}
                  alt={agent?.role?.displayName}
                />
              </div>
              <span className="text-[#20BD5F] ml-2 opacity-80 text-2xl ">
                {agent?.role?.displayName}
              </span>
            </div>
            <p className="pt-4 text-gray-400">Description</p>
            <p className="pt-2">{agent?.description}</p>
            <p
              className="pt-4 text-gray-400 text-
          lg"
            >
              Developer <br />
              <span className=" text-white">{agent?.developerName}</span>
            </p>
            <div className="pt-8 pb-5 ">
              <button
                class="bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
                onClick={handleAi}
              >
                See Fun Fact
              </button>
            </div>
            <div className="w-full h-full">{groqAi}</div>
          </div>
        </div>
        <h1 className="text-5xl pl-8 pt-10">Abilites —</h1>
        <div className="flex flex-wrap justify-center pt-8">
          {agent?.abilities?.map((item, index) => {
            if (item?.displayIcon === null) {
              return null;
            }

            return <AbilityCard type="abilities" data={item} key={index} />;
          })}
        </div>

        <h1 className="text-5xl pl-8 pt-14">Role —</h1>
        <div className="md:flex flex-wrap justify-center pt-8">
          <AbilityCard type="roles" data={agent?.role} />
        </div>
      </div>
    )
  );
};

Agent.propTypes = {
  data: PropTypes.array,
};

export default Agent;

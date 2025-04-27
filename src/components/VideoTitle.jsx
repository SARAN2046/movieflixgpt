import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full pt-[22%] aspect-video pl-12 bg-gradient-to-r from-black">
      <h1 className="text-3xl text-white font-bold">{title}</h1>
      <p className="w-2/4 py-6 text-white text-lg">{overview}</p>
      <div>
        <button className=" bg-white text-black py-2 px-8 mr-2 text-lg rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className=" bg-gray-500 text-white py-2 px-8 text-lg rounded-lg bg-opacity-50 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

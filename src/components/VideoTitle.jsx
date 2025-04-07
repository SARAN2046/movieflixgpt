import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="w-1/4 py-6 text-lg">{overview}</p>
      <div>
        <button className=" bg-gray-500 text-black py-2 px-8 mr-2 text-xl  rounded-lg hover:bg-opacity-80">
          &#9654; Play
        </button>
        <button className=" bg-gray-500 text-black py-2 px-8 text-xl  rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

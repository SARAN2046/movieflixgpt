import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ posterpath }) => {
 // console.log(posterpath);
  return (
    <>
      <img alt="movie card" className="w-48 pr-4" src={IMG_CDN_URL + posterpath} />
    </>
  );
};

export default MovieCard;

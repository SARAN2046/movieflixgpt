import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ posterpath }) => {
 // console.log(posterpath);
  return (
    <>
      <img alt="movie card" src={IMG_CDN_URL + posterpath} />
    </>
  );
};

export default MovieCard;

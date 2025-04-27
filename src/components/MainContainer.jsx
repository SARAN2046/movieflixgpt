import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
      <div> 
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default MainContainer;

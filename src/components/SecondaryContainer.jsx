import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="pl-10 bg-black text-white -mt-52">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.upcomingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Best Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"English Movies"} movies={movies.popularMovies} />
    </div>
  );
};

export default SecondaryContainer;

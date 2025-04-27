import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/Constants";
import { addUpcomingMovies } from "../utils/MoviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          options
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getTopRatedMovies();
  }, []);
};

export default useUpcomingMovies;

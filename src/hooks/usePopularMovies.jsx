import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/Constants";
import { addPopularMovies } from "../utils/MoviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopulargMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPopulargMovies();
  }, []);
};

export default usePopularMovies;

import { useDispatch } from "react-redux";
import { options } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/MoviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          options
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;

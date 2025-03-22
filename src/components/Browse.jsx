import React, { useEffect } from "react";
import Header from "./Header";
import { options } from "../utils/Constants";

const Browse = () => {
  const fetchNowPlayingData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        options
      );
      const data = await response.json();
      console.log(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchNowPlayingData();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;

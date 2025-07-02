import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl py-4">{title}</h1>
        <div>
          <button className="p-2 text-2xl" onClick={scrollLeft}>
            ⬅️
          </button>
          <button className="p-2 text-2xl" onClick={scrollRight}>
            ➡️
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 no-scrollbar p-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {movies?.map((movie, index) => (
          <div className="min-w-[200px] hover:scale-110 transition-transform duration-300">
            <MovieCard key={index} posterpath={movie?.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

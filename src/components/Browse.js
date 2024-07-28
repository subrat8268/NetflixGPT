import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePoplularPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div className="bg-black">
      <Header />
      {
        showGptSearch ?
          <GptSearch /> :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
      }

    </div>
  );
};

export default Browse;

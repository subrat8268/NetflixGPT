import React, { useEffect } from "react";
import Header from "./Header";
import { options } from "../utils/constants";

const Browse = () => {
  const getNowPlayingMovie = async() =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    )
    const json = await data.json();
    console.log(json.results);
  }

  useEffect(()=>{
    getNowPlayingMovie();
  }, [])

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;

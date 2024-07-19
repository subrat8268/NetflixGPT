import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  return (
    movies && (
      <div className='-mt-20 relative z-20'>
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Now Playing" movies={movies} />
      </div>
    )
  );
};

export default SecondaryContainer;

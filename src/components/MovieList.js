import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    console.log(movies);

    if (!movies || movies.length === 0) {
        return <p>No movies available</p>;
    }

    return (
        <div className=' mt-6 pl-10'>
            <h1 className='text-3xl mb-2 text-white'>{title}</h1>
            <div className='no-scrollbar flex overflow-x-scroll '>
                <div className='flex gap-2'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default MovieList;

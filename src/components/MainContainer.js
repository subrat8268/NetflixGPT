import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    const [mainMovie, setMainMovie] = useState(null);

    useEffect(() => {
        if (movies && movies.length > 0) {
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMainMovie(movies[randomIndex]);
        }
    }, [movies]);

    if (!mainMovie) return null;

    const { id, original_title, overview } = mainMovie || {};

    return (
        <div className='relative'>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;

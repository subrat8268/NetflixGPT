import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    
    useMovieTrailer(movieId);

    if (!trailerVideo || !trailerVideo.key) return null; // Add check for trailerVideo and its key

    return (
        <div className='w-screen'>
            <iframe
                className='w-screen h-screen object-cover'
                src={`https://www.youtube.com/embed/${trailerVideo.key}/?&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen

            ></iframe>
        </div>
    );
};

export default VideoBackground;

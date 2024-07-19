import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { options } from '../utils/constants';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideo = useCallback(async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }, [movieId, dispatch]);

    useEffect(() => {
        getMovieVideo();
    }, [getMovieVideo]);
}

export default useMovieTrailer;

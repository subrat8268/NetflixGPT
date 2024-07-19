import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect, useCallback } from "react";
import { options } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovie = useCallback(async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            options
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }, [dispatch]);

    useEffect(() => {
        getNowPlayingMovie();
    }, [getNowPlayingMovie]);
}

export default useNowPlayingMovies;

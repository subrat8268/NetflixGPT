import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";


const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovie = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            options
        )
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovie();
    }, [])
}

export default usePopularMovies;
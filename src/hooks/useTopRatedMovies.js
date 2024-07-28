import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovie = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            options
        )
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
        console.log(json.results)
    }

    useEffect(() => {
        getTopRatedMovie();
    }, [])
}

export default useTopRatedMovies;
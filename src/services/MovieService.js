import { fetchArrayData } from "../helpers/fetchArrayData";
import { moviesSuccess, moviesLoading, moviesError, movieDetailSuccess } from "../redux/reducers/moviesReducer";
import API from "./API";

export const fetchAllMovies = async (dispatch)=> {
    dispatch(moviesLoading());
    try {
        const { data } = await API().get('films/');
         dispatch(moviesSuccess(data.results));
    } catch (error) {
        dispatch(moviesError(error));
    }
}

export const sortMovieList = async (movies, dispatch)=> {
    dispatch(moviesLoading());
    try {
         dispatch(moviesSuccess(movies));
    } catch (error) {
        dispatch(moviesError(error));
    }
}

export const fetchMovie = async (id, dispatch)=> {
    dispatch(moviesLoading());
    try {
        const { data } = await API().get('films/' + id);
        const characters = await fetchArrayData(data.characters);
        const planets = await fetchArrayData(data.planets);
        const species = await fetchArrayData(data.species);
        const starships = await fetchArrayData(data.starships);
        const vehicles = await fetchArrayData(data.vehicles);
        const resolvedData = {...data, characters, planets, species, starships, vehicles}
        dispatch(movieDetailSuccess(resolvedData))
    } catch (error) {
        dispatch(moviesError(error))
    }
}
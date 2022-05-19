import { moviesSuccess, moviesLoading, moviesError } from "../redux/reducers/moviesReducer";
import API from "./API";

export const fetchAllMovies = async (dispatch)=> {
    dispatch(moviesLoading());
    try {
        const { data } = await API().get();
         dispatch(moviesSuccess(data.results));
    } catch (error) {
        dispatch(moviesError());
    }
}

export const fetchMovies = async (movie, dispatch)=> {

}
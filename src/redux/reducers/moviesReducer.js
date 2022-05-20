import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "movies",
    initialState: {
        pending: false,
        data: null,
        error: false,
        selected_movie: null
    },
    reducers: {
        moviesLoading: (state) => {
            state.pending = true;
        },
        moviesSuccess: (state, action) => {
            state.pending = false;
            state.data = action.payload;
        },
        moviesError: (state) => {
            state.pending = false;
            state.error = true;
        },
        movieDetailSuccess: (state, action) => {
            state.pending = false;
            state.selected_movie = action.payload;
        },
        sortMovies: (state, action) => {
            state.pending = false;
            state.data = action.payload
        }
    }
});

export const { moviesLoading, moviesSuccess, movieDetailSuccess ,moviesError, sortMovies } = movieSlice.actions;
export default movieSlice.reducer;
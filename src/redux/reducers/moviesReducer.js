import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "movies",
    initialState: {
        pending: false,
        data: null,
        error: false,
        details: null
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
            state.details = action.payload;
        }
    }
});

export const { moviesLoading, moviesSuccess, movieDetailSuccess ,moviesError } = movieSlice.actions;
export default movieSlice.reducer;
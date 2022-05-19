import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "movies",
    initialState: {
        pending: false,
        data: [],
        error: false
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
        }
    }
});

export const { moviesLoading, moviesSuccess, moviesError } = movieSlice.actions;
export default movieSlice.reducer;
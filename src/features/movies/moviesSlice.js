import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies : [],
}

const moviesSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
     addMovies : (state, {payload}) => {
        state.movies = payload;
     }
    }
})
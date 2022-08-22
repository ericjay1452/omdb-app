import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../UTILS/api/MovieApi"
import {Api_key} from "../../UTILS/api/Apikey"


export const fetchedMoviesAsync = createAsyncThunk("movies/fetchedApi", async () => {
        const fetchedData = await MovieApi.get
        (`?apikey=${Api_key}&s=Harry&type=movie`).catch(
          (err) => {
            console.log(`Err  :  ${err}`)
          }
        )
         return fetchedData.data
})

const initialState = {
    movies : {},
}

const moviesSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
     addMovies : (state, {payload}) => {
        state.movies = payload;
     }
    },
    extraReducers: {
        [fetchedMoviesAsync.pending] : () =>{
            console.log("Pending")
        },

        [fetchedMoviesAsync.fulfilled] : (state, {payload}) =>{
            return {...state, movies : payload}
        },

        [fetchedMoviesAsync.rejected] : () =>{}
    }
})

export const {addMovies} = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export default moviesSlice.reducer
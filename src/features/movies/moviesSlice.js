import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../UTILS/api/MovieApi"
import {Api_key} from "../../UTILS/api/Apikey"


// For fetching api movies
export const fetchedMoviesAsync = createAsyncThunk("movies/fetchedApi", async () => {
        const fetchedData = await MovieApi.get
        (`?apikey=${Api_key}&s=Harry&type=movie`).catch(
          (err) => {
            console.log(`Err  :  ${err}`)
          }
        )
         return fetchedData.data
})

// for fetching api series
export const fetchedSeriessAsync = createAsyncThunk("series/fetchedApi", async () => {
    const fetchedData = await MovieApi.get
    (`?apikey=${Api_key}&s=Friends&type=series`).catch(
      (err) => {
        console.log(`Err  :  ${err}`)
      }
    )
     return fetchedData.data
})

// for fetching Selected series or Movies id selected
export const fetchedSeriesOrMoviesAsync = createAsyncThunk("movies/fetchedApi", async (Id) => {
    const fetchedData = await MovieApi.get
    (`?apikey=${Api_key}&i=${Id}&plot=full`).catch(
      (err) => {
        console.log(`Err  :  ${err}`)
      }
    )
     return fetchedData.data
})

const initialState = {
    movies : {},
    shows : {},
    selectedId : {}
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


        [fetchedSeriessAsync.fulfilled] : (state, {payload}) =>{
            return {...state, shows : payload}
        },

        [fetchedSeriesOrMoviesAsync.fulfilled] : (state, {payload}) =>{
            return {...state, selectedId : payload}
        },

        [fetchedMoviesAsync.rejected] : () =>{}
    }
})

export const {addMovies} = moviesSlice.actions;

// 
export const getAllMovies = (state) => state.movies.movies
export const getAllSeries = (state) => state.movies.shows
export const getParticularId = (state) => state.movies.selectedId

export default moviesSlice.reducer
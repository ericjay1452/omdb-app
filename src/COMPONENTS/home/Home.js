import React, { useEffect } from 'react'
import MoviesArray from '../moviesArray/MoviesArray'
import MovieApi from "../../UTILS/api/MovieApi"
import {Api_key} from "../../UTILS/api/Apikey"
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/moviesSlice'

const Home = () => {

  const dispatch = useDispatch();

  useEffect( () =>{
   const ApiFetched = async () => {
    const fetchedData = await MovieApi.get
    (`?apikey=${Api_key}&s=Harry&type=movie`).catch(
      (err) => {
        console.log(`Err  :  ${err}`)
      }
    )
     dispatch(addMovies(fetchedData))
   }

   ApiFetched()
  }, [])
  return (
    <div>
      <div className = "banner-image"></div>
      <MoviesArray />
    </div>
  )
}

export default Home
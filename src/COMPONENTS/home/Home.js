import React, { useEffect } from 'react'
import MoviesArray from '../moviesArray/MoviesArray'
import {MovieApi} from "../../UTILS/api/MovieApi"
import {Apikey} from "../../UTILS/api/Apikey"
const Home = () => {

  useEffect( () =>{
   const ApiFetched = async () => {
    const fetchedData = await MovieApi.get(`?apikey=${Apikey}&s=Harry`)
   }
  }, [])
  return (
    <div>
      <div className = "banner-image"></div>
      <MoviesArray />
    </div>
  )
}

export default Home
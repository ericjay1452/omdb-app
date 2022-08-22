import React, { useEffect } from 'react'
import MoviesArray from '../moviesArray/MoviesArray'
import { useDispatch } from 'react-redux'
import {fetchedMoviesAsync } from "../../features/movies/moviesSlice"
const Home = () => {
  const dispatch = useDispatch()
  

  useEffect( () =>{
   dispatch(fetchedMoviesAsync)
  }, [dispatch])

  return (  
    <div>
      <div className = "banner-image"></div>
      <MoviesArray />
    </div>
  )
}

export default Home
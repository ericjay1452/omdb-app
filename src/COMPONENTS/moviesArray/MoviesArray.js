import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllSeries } from '../../features/movies/moviesSlice';
import {MoviesCard} from "../index"
import "./MoviesArray.scss"

const MoviesArray = () => {
  const AllMovies = useSelector(getAllMovies);
  let RenderMovies = ""

  RenderMovies = AllMovies.Response === "True" ? (
    AllMovies?.Search?.map( (movie, index) =>{
       return (
        <MoviesCard key={index} data = {movie}/>
       )
    })
  ) : (
    <div className = "Error">
    <h2>
     {RenderMovies.Error}
    </h2>
    </div> 
    
  )


  // For getting all series

  const AllSeries = useSelector(getAllSeries);
  let RenderSeries = ""

  RenderSeries = AllSeries.Response === "True" ? (
    AllSeries?.Search?.map( (movie, index) =>{
       return (
        <MoviesCard key={index} data = {movie}/>
       )
    })
  ) : (
    <div className = "Error">
    <h2>
     {RenderSeries.Error}
    </h2>
    </div> 
    
  )

  return (
    <>
    <div className='block w-full relative'>
      <h3>Movies</h3>
      <div className='block m-auto mb-2 w-11/12 relative bg-neutral-300 rounded'>
      <div className='container-grid mt-7'>
       {RenderMovies}
      </div>
     </div>
    </div>

    <div className='block w-full relative'>
      <h3>Series</h3>
      <div className='block m-auto mb-2 w-11/12 relative bg-neutral-300 rounded'>
      <div className='container-grid mt-7'>
       {RenderSeries}
      </div>
     </div>
    </div>
    </>
  )
}

export default MoviesArray
import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/moviesSlice';
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
  return (
    <>
    <div className='block w-full relative'>
      <div className='block m-auto mb-2 w-11/12 relative bg-neutral-300 rounded'>
      <div className='container-grid mt-7'>
       {RenderMovies}
      </div>
     </div>
    </div>
    </>
  )
}

export default MoviesArray
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
        <MoviesCard key={index} data = {AllMovies}/>
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
      <div className='block m-auto mt-2 mb-2 w-11/12 relative bg-neutral-900 rounded text-white'>
      <div className='container-grid'>
       {RenderMovies}
      </div>
     </div>
    </div>
    </>
  )
}

export default MoviesArray
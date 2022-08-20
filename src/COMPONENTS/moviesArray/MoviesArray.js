import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/moviesSlice';

const MoviesArray = () => {
  const AllMovies = useSelector(getAllMovies);
  return (
    <div>
      {console.log(AllMovies)}
    </div>
  )
}

export default MoviesArray
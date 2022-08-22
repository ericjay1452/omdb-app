import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchedSeriesOrMoviesAsync, getParticularId} from "../../features/movies/moviesSlice"

const MoviesDetail = () => {
  const {Id} = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getParticularId)
  console.log(data)

  useEffect( () =>{
     dispatch(fetchedSeriesOrMoviesAsync(Id))
  }, [dispatch, Id])
  return (
    <div>

    </div>
  )
}

export default MoviesDetail
import React from 'react'
import "./MoviesCard.scss"
import { Link } from 'react-router-dom'

const MoviesCard = (props) => {
  const {Poster, Title, Year, Type, imdbID : Id} = props.data
  return (
    <Link to={`/movies:${Id}`}>
    <div className='block relative w-full card cursor-pointer p-1 rounded'>
      <div className='movie-card'>
         <div className='movie-card-detail'>
          <div className = "movie-card-inner">
            <div className='movie-card-top'>
              <img src={Poster} alt = {Title} className = "block rounded w-full h-auto"/>
            </div>

            <div className='movie-card-bottom'>
              <div className = "movie-card-info mb-2 p-2 pb-1">
                <h2 className = "text-center font-bold">{Title}</h2>

                <div className='w-full relative flex flex-wrap justify-between items-center px-2 font-bold'>
                <p>{Year}</p> 
                <p>{Type}</p>
                </div>

              </div>
            </div>

          </div>
         </div>
      </div>

    </div>
    </Link>
  )
}

export default MoviesCard
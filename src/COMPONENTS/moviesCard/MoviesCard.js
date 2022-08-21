import React from 'react'

const MoviesCard = (props) => {
  const {Poster, Title, Year, Type, imdbID : Id} = props.data
  return (
    <div className='block relative w-full'>
      <div className='movie-card'>
         <div className='movie-card-detail'>
          <div className = "movie-card-inner">
            <div className='movie-card-top'>
              <img src={Poster} alt = {Title} className = "max-w-full block rounded"/>
            </div>

            <div className='movie-card-bottom'>
              <div className = "movie-card-info">
                <h2>{Title}</h2>
                <p>{Year}</p>
              </div>
            </div>

          </div>
         </div>
      </div>

    </div>
  )
}

export default MoviesCard
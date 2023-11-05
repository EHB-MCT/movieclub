import React from 'react'

const MoviePoster = ({ link }) => {
  return (
    <div className="w-full rounded flex items-center justify-center">
        <img 
            src={link}
            className="rounded w-9/12" 
        />
    </div>
  )
}

export default MoviePoster
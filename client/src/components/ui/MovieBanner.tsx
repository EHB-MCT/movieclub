import React from 'react'

const MovieBanner = () => {
  return (
    <div className='w-full h-96 relative'>
        <img 
            src="https://www.themoviedb.org/t/p/original/9HeFvE34rmsESc664ZDGfpm4pqC.jpg"
            className='h-full w-full object-cover absolute top-0 left-0'
        />
        <div className='w-full h-full bg-gradient-to-b from-transparent to-slate-800 absolute top-0 left-0 z-20 opacity-85'></div>
        <div className='w-full h-full bg-gradient-to-r from-slate-800 from-10% via-transparent via-50% to-slate-800 to-90% absolute top-0 left-0 z-10 opacity-85'></div>
    </div>
  )
}

export default MovieBanner
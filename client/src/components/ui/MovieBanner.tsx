import React from 'react'

const MovieBanner = () => {
  return (
    <div className='w-full h-72 relative'>
        <img 
            src="https://a.ltrbxd.com/resized/sm/upload/p4/8q/jq/cc/the-exorcist-1920-1920-1080-1080-crop-000000.jpg?v=1e9adb721a"
            className='h-full w-full object-cover absolute top-0 left-0'
        />
        <div className='w-full h-full bg-gradient-to-r from-slate-800 from-10% via-transparent via-50% to-slate-800 to-90% absolute top-0 left-0 z-10'>
            
        </div>
        <p className='text-white'>
            MovieBanner
        </p>
    </div>
  )
}

export default MovieBanner
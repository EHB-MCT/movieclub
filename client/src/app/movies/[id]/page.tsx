import React from 'react'

// components
import { Container, MovieBanner, MovieTitle, MoviePoster } from '@/components/index'

const Page = () => {
  return (
    <div className='bg-slate-800'>
      <Container>
        <MovieBanner />
        <div className="flex">
          
          <div className="w-3/12">
            <MoviePoster link="https://www.themoviedb.org/t/p/original/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg"/>
            <div className="border rounded border-slate-500 w-9/12 mt-3 mx-auto">
              <div className="flex items-center bg-slate-700 justify-between p-3">
                <p className="text-xs text-slate-300 uppercase">Where to watch</p>
                <a href="" className="text-slate-300 text-xs">Trailer</a>
              </div>
            </div>
          </div>
          <div className="w-9/12 grow">
            <MovieTitle title="Killers of the Flower Moon "/>
            <p className="text-slate-400 text-sm mt-1">206 mins. 2023. Directed by Martin Scorsese</p>
            <div className="flex">
              <div className="w-8/12 grow">
                <p className="text-slate-400 uppercase mt-4">Greed is an animal that hungers for blood.</p>
                <p className="text-slate-400 mt-4">When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.</p>
                <p className="text-xs text-slate-400 mt-4"> More at
                  <a href="https://www.imdb.com/" className="rounded border border-slate-400 p-1 mx-1">IMDB</a>
                  <a href="https://www.themoviedb.org/" className="rounded border border-slate-400 p-1">TMDB</a>
                </p>
              </div>
              <div className="w-4/12 bg-slate-500 mt-4">
                <div className="grid grid-cols-3 gap-4">
                  <p className="bg-green-200">watch</p>
                  <p className="bg-red-200">like</p>
                  <p className="bg-blue-200">watchlist</p>
                </div>
              </div>
            </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Page
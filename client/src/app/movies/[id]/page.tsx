import React from 'react'

// components
import { Container, MovieBanner } from '@/components/index'

const Page = () => {
  return (
    <div className='bg-slate-800'>
      <Container>
        <MovieBanner />
        <p className='text-white'>
          MovieBanner
        </p>
      </Container>
    </div>
  )
}

export default Page
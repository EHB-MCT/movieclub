import React from 'react'
import { Container } from '@/components'

const Footer = () => {
  return (
    <footer className="bg-slate-700 py-4">
        <Container>
            <p className="text-slate-200 opacity-30 text-xs">&copy; 2023. All rights reserved. Film data from&nbsp;
                <a href="https://www.themoviedb.org/" className="underlin ">TMDb</a>
            .</p>
        </Container>
    </footer>
  )
}

export default Footer
import React, { Suspense } from 'react'
import NavbarContent from './NavbarContent'
import Loading from '@/app/loading'

function Navbar() {
  return (
    <Suspense fallback={<Loading/>}>
        <NavbarContent/>
    </Suspense>
  )
}

export default Navbar
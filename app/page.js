import React from 'react'
import Home from './(pages)/home/page'
import Footer from './components/Footer'
import HeaderHome from './components/HeaderHome'

function page() {
  return (
    <div className='min-h-screen bg-white'>
      <HeaderHome/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default page

import React from 'react'
import Navbar from '../components/Layout/Navbar'
import Search from '../components/Search'
import Footer from '../components/Layout/Footer'

const Home :React.FC = () => {
  return (
    <>
    <div className='2xl:mx-40 xl:mx-20 lg:mx-10 mx-5 lg:py-10 py-5'>
        <div className='flex flex-col 2xl:gap-36 xl:gap-28 lg:gap-20 gap-10'>
        <Navbar/>
        <Search/>
        </div>
    </div>
        <Footer/>
    </>
  )
}

export default Home
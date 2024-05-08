import Header from '../../Components/header/Header'
import Post from '../../Components/post/Post'


import SideBar from '../../Components/sidebar/SideBar'
import './Home.css'

import React from 'react'

const Home = () => {
  return (
    <>
     <Header />
    <div className='home'>
         
        
         
         {/* <Posts/> */}
         <Post />

         <SideBar />

    </div>
    </>
  )
}

export default Home
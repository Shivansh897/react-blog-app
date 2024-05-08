import React from 'react'
import TopBar from './Components/topbar/TopBar'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Write from './pages/write/Write'
import Single from './pages/single/Single'
import Edit from './pages/edit/Edit'
import AboutPage from './pages/about/About'
import ContactPage from './Components/contact/Contact'
import Fav from './Components/favourite/Fav'
import BlogState from './context/Blogs/BlogState'


const App = () => {
  return (
    <BlogState>
    <BrowserRouter>
    < TopBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/write' element={<Write />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
      <Route path='/view/:id' element={<Single />}></Route>
      <Route path='/edit/:id' element={<Edit />}></Route>
      <Route path='/favourites/' element={<Fav />}></Route>
    </Routes>
    </BrowserRouter>
    </BlogState>
    
    
    
  )
}

export default App
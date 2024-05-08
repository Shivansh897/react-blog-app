import './SideBar.css'


import React from 'react'

const SideBar = () => {
  return (
    <>
    <div className='sidebar'>
<div className="sidebarItem">
  <div>
  <span className='sidebarTitle'>ABOUT ME</span>
  </div>
  <img src={window.location.origin + '/images/myPic.jpeg' } className='image-with-shadow' alt='' />
  <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deleniti maiores molestiae vitae, itaque, odit assumenda eius adipisci earum quas iste aliquid asperiores rem possimus odio. Repudiandae fugiat sint dicta.</p>
</div>

<div className="sidebarItem">
  <span className="sidebarTitle">CATEGORIES</span>
  <ul className="sidebarList">
  <li className="sidebarListItem">Life</li>
  <li className="sidebarListItem">Music</li>
  <li className="sidebarListItem">Style</li>
  <li className="sidebarListItem">Sports</li>
  <li className="sidebarListItem">Tech</li>
  <li className="sidebarListItem">Travel</li>
  </ul>
</div>

<div className="sidebarItem">
  <span className="sidebarTitle">FOLLOW US</span>
  <div className="sidebarSocial">
  <i className="sidebarIcon fa-brands fa-square-facebook" style={{ color: '#2b79de' }}></i>
        <i className="sidebarIcon fa-brands fa-square-twitter" style={{ color: '#2b79de' }}></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest" style={{ color: '#f11e1e' }}></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"  style={{ color: '#d62976' }}></i>

  </div>
</div>

    </div>
    </>
  )
}

export default SideBar
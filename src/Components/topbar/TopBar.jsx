import React, { useState } from 'react'
import './TopBar.css'
import { Link } from 'react-router-dom'



const TopBar = () => {

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook" style={{ color: '#2b79de' }}></i>
        <i className="topIcon fa-brands fa-square-twitter" style={{ color: '#2b79de' }}></i>
        <i className="topIcon fa-brands fa-square-pinterest" style={{ color: '#f11e1e' }}></i>
        <i className="topIcon fa-brands fa-square-instagram" style={{ color: '#d62976' }}></i>
        </div>
        <div className="topCenter">
            <ul className='topList'>
                <li className='topListItem'><Link  to='/' className='link'>HOME</Link></li>
                <li className='topListItem'><Link to='/about' className='link'>ABOUT</Link></li>
                <li className='topListItem'><Link to='/contact' className='link'>CONTACT</Link></li>
                <li className='topListItem'><Link to='/write' className='link'>WRITE</Link></li>
                <li className='topListItem'><Link to='/favourites' className='link'>FAVOURITES</Link></li>
            </ul>
        </div>
        <div className="topRight">
          
            <img className='topImg' src='https://imgs.search.brave.com/GkwXN_VxaQwZOo3pT7IxV2g399aSecdXAxfHhObQGpI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c3BpY2V3b3Jrcy5j/b20vd3AtY29udGVu/dC90aGVtZXMvZ2F1/Z2UtY2hpbGQvaW1h/Z2VzL25ld3NsZXR0/ZXIuc3Zn.svg' alt='' />
            {isSearchVisible ? (
          <div className="searchContainer">
             <i className="searchIcon fas fa-times" onClick={toggleSearch}></i>
            <input type="text" placeholder="Search" className="searchBar" />
           
          </div>
        ) : (
          <i className='topSearchIcon fas fa-search' onClick={toggleSearch}></i>
        )}
        </div>
    </div>
  )
}

export default TopBar
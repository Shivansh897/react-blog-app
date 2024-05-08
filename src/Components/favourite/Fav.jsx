import React, { useContext } from 'react'
import BlogContext from '../../context/Blogs/BlogContext';

import './fav.css'
import { Link } from 'react-router-dom';


const Fav = () => {
  const { foundBlogs } = useContext(BlogContext);
  return (
    <div className="fav-container">
      <h2 className="fav-heading">Favorite Blogs</h2>
      <hr className="horizontal-line" />
      <div className="blog-list">
        {foundBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt={blog.title} className="blog-image" />
            <div className="blog-details">
              .
              <div className='singlePostInfo'>

              <h3 className="blog-title"><Link to={`/view/${blog.id}`} className='link'>{blog.title}</Link></h3>
              
              <span className='singlePostDate'>CATEGORY: {blog.category}</span>
              </div>
              <p className="blog-description">{blog.content}</p>

              <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author : Anonymous</span>
                <span className="singlePostDate">1 hour ago</span>
                
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fav
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import './singlePost.css'




import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, deleteUser, incrementLikes } from '../../UserReducer';
import blogContext from '../../context/Blogs/BlogContext';


const SinglePost = () => {
  const saveBlogContext = useContext(blogContext)
const {id} = useParams();
const blogs = useSelector((state)=> state.blogs);

const existingBlog = blogs.filter(b => b.id== id);

const {title,category,content,likes} =  existingBlog[0];
// const [blogTitle, setBlogTile] = useState(title)

const blogTitle = title
// const [blogCategory, setBlogCategory] = useState(category)
const blogCategory = category
// const [blogContent, setBlogContent] = useState(content)
const blogContent = content
const blogLikes = likes
const [liked, setLiked] = useState(false);


const dispatch = useDispatch()
const navigate =  useNavigate()



  const handleLikeClick = () => {
    dispatch(incrementLikes({id:id}))
    setLiked(true); // Set liked to true when clicked

    // Use setTimeout to reset liked to false after 1 second (1000 milliseconds)
    setTimeout(() => {
      setLiked(false);
    }, 300);
  };

  const iconStyle = {
    color: liked ? 'blue' : 'black', // Change color based on the liked state
  };

const handleDelete = (id) =>{
    
    dispatch(deleteBlog({id: id}))
  navigate('/')
  
}



  return (
    <>
    <div className='singlePost'>
        
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">{blogTitle}
            <div className="singlePostEdit">
           <Link to={`/edit/${id}`}> <i className="singlePostIcon fa-regular fa-pen-to-square"></i></Link>
           <i onClick={()=> saveBlogContext.handleSaveClick(id)} className={`singlePostIcon fa-solid fa-bookmark${saveBlogContext.isPink ? ' pink-icon' : ''}`}></i>
            <i onClick={handleLikeClick} className={`singlePostIcon fa-solid fa-thumbs-up ${liked ? 'liked' : ''}`}
      style={iconStyle} id='like'></i>
            
            {/* <i className="singlePostIcon fa-regular fa-pen-to-square"></i> */}
             <i onClick={()=>handleDelete(id)}  className="singlePostIcon fa-solid fa-trash"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostCategory">Category: {blogCategory}</span>
                <span className='singlePostInfo'>Likes: {blogLikes}</span>
            </div>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author : Anonymous</span>
                <span className="singlePostDate">1 hour ago</span>
                
            </div>
            
            <p className='singlePostDesc'>{blogContent}</p>
              
        </div>

    </div>
    </>
  )
}

export default SinglePost
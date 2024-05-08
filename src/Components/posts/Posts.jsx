import {  useSelector } from 'react-redux'
import './posts.css'
import { Link } from 'react-router-dom';

const Posts = () => {
   
  // const[blogs, setBlogs] = useState([])
    
  const blogs = useSelector((state)=> state.blogs);
  console.log(blogs);
 
  return (
    <>
    <div className='posts'>
      {blogs && blogs.map((blog, index)=>(
        <li className='list' key={index}>
          <div className="post">
          <img className='postImg' src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
         <div className="postInfo">
            <div className="postCats">
              <span className='postCat'>{blog.category}</span>
             </div>
          
           <span className='postTitle'><Link to={`/view/${blog.id}`} className='link'>{blog.title}</Link> </span>
           <hr />
         <span className="postDate">1 hour ago</span>
         </div>
         <p className='postDesc'>{blog.content}</p>
         
         </div>
       
        </li>
      ))}
    </div>

    
    </>
  )
}

export default Posts
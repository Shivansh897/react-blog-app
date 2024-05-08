import './edit.css'

import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateBlog } from '../../UserReducer'


const Edit = () => {

    const {id} = useParams();
    // const blogs = useSelector((state) => state.blogs)
    const blogs = useSelector((state)=> state.blogs);
    const existingBlog = blogs.filter(b => b.id ==id)
    
    const {title, category, content} = existingBlog[0];
    
    const [blogTitle, setBlogTitle] = useState(title)
  const [blogCategory, setBlogCategory] = useState(category)
  const [blogContent, setBlogContent] = useState(content)
  const [titleError, setTitleError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [contentError, setContentError] = useState('');
  const dispatch = useDispatch()
  const navigate =  useNavigate()

  const handleEdit = (event ) =>{
    event.preventDefault();
    setTitleError('');
   setCategoryError('');
   setContentError('');

   let hasError = false;

   if (!blogTitle) {
     setTitleError('*Title is required*');
     hasError = true;
   }

   if (!blogCategory) {
     setCategoryError('*Category is required*');
     hasError = true;
   }

   if (!blogContent) {
     setContentError('*Content is required*');
     hasError = true;
   }

   if (hasError) {
     return; // Prevent form submission if there are errors
   }
     dispatch(updateBlog({
        id:id,
        title : blogTitle,
        category : blogCategory,
        content : blogContent 
     }))
     navigate('/')
  }
  return (
    <>
    <div className="write">
        <img className="writeImg" src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
        <form onSubmit={handleEdit} className="writeForm">
         
         <div className="writeFormGroup">

            <input type='text' placeholder='Title' name='title' className='writeInput' value={blogTitle} autoFocus={true} 
            onChange={e=> setBlogTitle(e.target.value)} />
            {titleError && <p className="error">{titleError}</p>}
         </div>
         <div className="writeFormGroup">

              <input type='text' placeholder='Category' name='category' value={blogCategory} className='writeInput'  
              onChange={e=> setBlogCategory(e.target.value)}/>
               {categoryError && <p className="error">{categoryError}</p>}
          </div>

         <div className="writeFormGroup">
            <textarea placeholder='Tell your story...' type='text' value={blogContent} name='content' className="writeInput writeText" 
            onChange={e=> setBlogContent(e.target.value)}/>
             {contentError && <p className="error">{contentError}</p>}

         </div>
         <button className="writeSubmit">Publish</button>

        </form>
    </div>
    </>
  )
}

export default Edit
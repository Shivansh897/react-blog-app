import { addBlog } from '../../UserReducer'
import './write.css'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Write = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')
  const [titleError, setTitleError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [contentError, setContentError] = useState('');
  const blogs = useSelector((state)=> state.blogs);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleSubmit = (event) =>{
   event.preventDefault();
   setTitleError('');
   setCategoryError('');
   setContentError('');

   let hasError = false;

   if (!title) {
     setTitleError('*Title is required*');
     hasError = true;
   }

   if (!category) {
     setCategoryError('*Category is required*');
     hasError = true;
   }

   if (!content) {
     setContentError('*Content is required*');
     hasError = true;
   }

   if (hasError) {
     return; // Prevent form submission if there are errors
   }


   dispatch(addBlog({id: blogs[blogs.length -1].id + 1,title,category,content}))
   navigate('/')
   
  }
  return (
    <>
    <div className="write">
        <img className="writeImg" src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
        <form onSubmit={handleSubmit} className="writeForm">
         
         <div className="writeFormGroup">

            <input type='text' placeholder='Title' name='title' className='writeInput' autoFocus={true} 
            onChange={e=> setTitle(e.target.value)} />
             {titleError && <p className="error">{titleError}</p>}
         </div>
         <div className="writeFormGroup">

              <input type='text' placeholder='Category' name='category' className='writeInput'  
              onChange={e=> setCategory(e.target.value)}/>
               {categoryError && <p className="error">{categoryError}</p>}
          </div>

         <div className="writeFormGroup">
            <textarea placeholder='Tell your story...' type='text' name='content' className="writeInput writeText" 
            onChange={e=> setContent(e.target.value)}/>
           {contentError && <p className="error">{contentError}</p>}
         </div>
         

         <button className="writeSubmit">Publish</button>

        </form>
    </div>
    </>
  )
}

export default Write
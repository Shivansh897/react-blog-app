import { useEffect, useState } from "react";
import BlogContext from "./BlogContext";


const BlogState = (props) =>{
    const [foundBlogs, setFoundBlogs] = useState([]);
    const [isPink, setIsPink] = useState(false);

    useEffect(() => {
        // Load the foundBlogs list from local storage when the component mounts
        const savedFoundBlogs = JSON.parse(localStorage.getItem("foundBlogs")) || [];
        setFoundBlogs(savedFoundBlogs);
      }, []);
     
    const handleSaveClick = (id) =>{
        const blogsInLocalStorage = JSON.parse(localStorage.getItem("blogs"));
      
        const blog = blogsInLocalStorage.find((blog) => blog.id == id);
        setIsPink(true);

       
        setTimeout(() => {
          setIsPink(false);
        }, 700);
        
    
        if (blog) {
          // Check if the blog is already in foundBlogs
      if (!foundBlogs.some((foundBlog) => foundBlog.id == blog.id)) {
        // If it's not already in the list, add it
        const updatedFoundBlogs = [...foundBlogs, blog];
        setFoundBlogs(updatedFoundBlogs);

        // Store the updated foundBlogs list in local storage
        localStorage.setItem("foundBlogs", JSON.stringify(updatedFoundBlogs));
      }
          
        }
       
    }

    return (
        <BlogContext.Provider value={{handleSaveClick,foundBlogs,isPink}}>
            {props.children}
        </BlogContext.Provider>

    )
}

export default BlogState;
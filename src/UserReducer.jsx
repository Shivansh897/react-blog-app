import { createSlice } from "@reduxjs/toolkit";
import { blogList } from "./Data";


const getInitialState = () => {
    const persistedState = localStorage.getItem("blogs");
    return persistedState ? JSON.parse(persistedState) : blogList;
  };

const userSlice =  createSlice({
    name:"blogs",
    initialState: getInitialState(),
    reducers: {
        addBlog: (state,action)=>{
            state.push(action.payload)
            localStorage.setItem("blogs", JSON.stringify(state));
        },
        updateBlog: (state,action) =>{
         const {id,title,category,content} = action.payload;
         const updattingBlog = state.find(blog => blog.id == id);
         if(updattingBlog){
            updattingBlog.title = title;
            updattingBlog.category = category;
            updattingBlog.content = content;
         }    
         localStorage.setItem("blogs", JSON.stringify(state));
        },
        deleteBlog: (state,action) =>{
            const {id} = action.payload
            
            const deletingBlogIndex = state.findIndex(blog => blog.id == id);
            
            if(deletingBlogIndex !== -1){
                state.splice(deletingBlogIndex, 1);
                 localStorage.setItem("blogs", JSON.stringify(state));
                 
            }    
            

        },
        incrementLikes: (state,action) =>{
            const { id } = action.payload;
             const blog = state.find(blog => blog.id == id);
             if (blog) {
                  blog.likes += 1;
                 localStorage.setItem("blogs", JSON.stringify(state));
                 }
        }

        }

})

export const {addBlog, updateBlog,deleteBlog,incrementLikes} = userSlice.actions;
export default userSlice.reducer;
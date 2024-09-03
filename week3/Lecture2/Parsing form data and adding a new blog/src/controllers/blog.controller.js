// Please don't change the pre-written code
// Import the necessary modules here
import {blogs} from '../models/blog.model.js'

export const renderBlogs = (req,res) => {
  // Write your code here
  return res.render('blogs',{blogs:blogs})
};
export const renderBlogForm = (req,res) => {
  // Write your code here
  return res.render('addBlogForm');
};
export const addBlog = (req,res) => {
  // Write your code here
  let data = req.body
  console.log(data);
  blogs.push(data);
  // return renderBlogs;
  return res.render('blogs',{blogs:blogs})  
};

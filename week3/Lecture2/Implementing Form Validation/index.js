import express from "express";
import { renderBlogForm,validateBlog } from "./blog.controller.js";
import path from "path";
// import {validation} from './middleware/blog.middleware.js'
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", renderBlogForm);
app.post("/addblog", validateBlog);

export default app;

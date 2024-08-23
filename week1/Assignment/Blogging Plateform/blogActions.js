// Do not change the pre-written code.
// Make the necessary imports here.
// const fs = require('fs');
// const path = require('path');
import fs from "fs"
import path from "path"


export const writeBlog = (filePath, name) => {
// Write your code here.
    fs.appendFileSync(filePath, name);
}

export const publishBlog = (filePath) => {
// Write your code here.
    const buffer = fs.readFileSync(filePath);
    return buffer.toString();
}
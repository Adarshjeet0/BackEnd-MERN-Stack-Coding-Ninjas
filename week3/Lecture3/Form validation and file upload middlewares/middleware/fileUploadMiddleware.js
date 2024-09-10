import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  // Write your code here
  destination:(req,file,callback)=>{
    callback(null,"./public/uploads");
  },
  filename:(req,file,callback)=>{
    const name = Date.now() + '-'+file.originalname;
    callback(null,name);
  }
});

export default multer({ storage });

// import multer from 'multer'


// const storageConfig = multer.diskStorage({
//     destination:(req,file,callBack)=>{
//         callBack(null,'/public/images/');
//     },
//     fileName:(req,file,callBack)=>{
//         const name = Date.now()+'-'+file.originalname;
//         console.log(name);
//         callBack(null,name);
//     },
// })

// export const uploadFile = multer({storage: storageConfig,});

import multer from 'multer';

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    const name =
      Date.now() + '-' + file.originalname;
    cb(null, name);
  },
});

export const uploadFile = multer({
  storage: storageConfig,
});

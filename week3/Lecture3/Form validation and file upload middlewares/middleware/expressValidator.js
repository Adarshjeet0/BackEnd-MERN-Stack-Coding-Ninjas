// // Please don't change the pre-written code
// // Import the necessary modules here

// export const formValidation = async (req, res, next) => {
//   // Write your code here
//   const {name,email} = req.body;
//   const fileUrl = req.file.filename;
//     let rules = [
//         body('name').notEmpty().withMessage("Name is required"),
//         body('email').notEmpty().withMessage("Enter a valid email"),
//         body('fileUrl').isURL().withMessage("Profile image is required"),
//     ];

//     await Promise.all(rules.map(rule=> rule.run(req)));
//     var validationErrors = validationResult(req);
//     console.log(validationErrors);
//     if(!validationErrors.isEmpty()){
//         return res.render('upload-form',{error:validationErrors.array()[0].msg, user:false})
//     }
//     // res.render('upload-form',{error:false})
//     next();
// };

// Import necessary modules here
import { body, validationResult } from 'express-validator';

export const formValidation = async (req, res, next) => {
  // Write your validation rules for name and email
  let rules = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Enter a valid email')
  ];

  // Run validations
  await Promise.all(rules.map(rule => rule.run(req)));

  // Check validation result for name and email
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.render('upload-form', { error: validationErrors.array()[0].msg, user: false });
  }

  // File validation (check if file exists)
  if (!req.file) {
    return res.render('upload-form', { error: 'Profile image is required', user: false });
  }

  // Move to the next middleware if no errors
  next();
};



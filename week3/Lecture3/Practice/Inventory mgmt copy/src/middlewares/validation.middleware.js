import {body, validationResult} from 'express-validator';

export const validateRequest = async (req,res,next)=>{
    // 1. Setup rules for validation
    // console.log(req.body);
    console.log(req.body);
    let rules = [
        body('name').notEmpty().withMessage("Name is required"),
        body('desc').notEmpty().withMessage("Description is required"),
        body('price').isFloat({gt:0}).withMessage("Price should be positive value"),
        // body('imageUrl').isURL().withMessage("Invalid URL"),
    ];
    // console.log(rules)

    // 2. run those rules
    await Promise.all(rules.map(rule=> rule.run(req)));

    // 3. check if there are any errors after running the rules
    var validationErrors = validationResult(req);
    // console.log(validationErrors);
    // 4. if errors, return error withMessage
    if(!validationErrors.isEmpty()){
        return res.render('add-item',{errors:validationErrors.array()[0].msg})
    }
    next();
}
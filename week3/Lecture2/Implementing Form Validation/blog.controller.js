// Please don't change the pre-written code

export const validateBlog = (req, res) => {
    // Write your code here
    const {title, description,image} = req.body;
    console.log(title,description,image);
    let errors = [];
    if(title.length<3){
      errors.push("The title field should not be empty");
      errors.push("The title field should contain at least 3 characters");
    }
    if(description.length<10){
      errors.push("The description field should not be empty");
      errors.push("The title field should contain at least 10 characters");
    }
    try {
      const validURL = new URL(image);
    } catch (err) {
      errors.push("The image URL provided should be a valid URL");
    }
    if(errors.length>0){
      res.status(401).render("addBlog",{errors:errors,success:false})
      console.log(errors);
    }else{
      res.status(201).render("addBlog", { errors: false, success: true });
    }
  };
  export const renderBlogForm = (req, res) => {
    res.render("addBlog", { errors: null, success: false });
  };
  
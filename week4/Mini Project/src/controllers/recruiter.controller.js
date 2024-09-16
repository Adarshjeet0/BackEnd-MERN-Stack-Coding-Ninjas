import RecruiterModel from '../models/recruiter.model.js';
import JobsModel from '../models/jobs.model.js';

const recruiterModel = new RecruiterModel();
const jobsModel = new JobsModel();

export default class RecruiterController{
    
    // isValid(req,res){
    //     const {email, password} = req.body;
    //     const valid = isValidRecruiter(email, password);
    //     if(valid){
    //         const jobs = jobsModel.getAllJobs();
    //         // console.log(jobs);
    //         res.render('jobListings',{jobs:jobs}, );
    //     }else{
    //         res.render('loginNotFound');
    //     }
    // }

    getRegister(req,res){
        res.render('register');
    }

    postRegister(req,res){
        const {name, password, email} = req.body;
        
        recruiterModel.add(name, email, password);
        res.render('login');
    }
    getLogin(req,res){
        res.render('login');
    }

    postLogin(req,res){
        const {email, password} = req.body;
        // const {email, password} = req.body;
        const valid = recruiterModel.isValidRecruiter(email, password);
        if(valid){
            req.session.userEmail=email;
            req.session.userName=valid.name;
            const jobs = jobsModel.getAllJobs();
            // console.log(jobs);
            res.render('jobListings',{jobs:jobs, name:req.session.userName , userEmail: req.session.userEmail} );
        }else{
            res.render('loginNotFound');
        }

        // res.render('login');
    }

    logout(req,res){
        req.session.destroy((err)=>{
            if(err){
                res.status(401).send(err);
            }else{
                res.redirect("/login");
            }

        })
    }


}
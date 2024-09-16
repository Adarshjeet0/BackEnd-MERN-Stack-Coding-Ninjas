import JobsModel from '../models/jobs.model.js';
import ApplicantModel from '../models/applicant.model.js';

const jobsModel = new JobsModel();
const applicantModel = new ApplicantModel();

export default class jobSeeker{
    static index(req,res){
        res.render('home', {userEmail: req.session.userEmail, name:req.session.userName});
    }

    static jobListings(req,res){
        const jobs = jobsModel.getAllJobs();
        // console.log(jobs);
        res.render('jobListings',{jobs:jobs, userEmail: req.session.userEmail, name:req.session.userName});
    }
    static jobDetails(req,res){
        const id = req.params.id;
        const applicants = applicantModel.getApplicants(id);
        jobsModel.updateAplicants(applicants.length, id);
        const job = jobsModel.getJobById(id);
        // const id = req.params.id;
        // console.log(id);
        // console.log(job);
        // console.log(req.session.userEmail);
        res.render('jobDetails',{job, userEmail: req.session.userEmail, name:req.session.userName, totalApplicants:applicants.length});
    }
    static getLogin(req,res){
        res.render('login');
    }

    

    static getNewJob(req,res){
        res.render('getNewJob', { userEmail: req.session.userEmail, name:req.session.userName});
    }
    static postNewJob(req,res){
        // const newJob = req.body;
        const {job_category, job_designation, job_location, company_name, salary,number_of_openings, skills_required, apply_by} = req.body;
        jobsModel.addNewJob(job_category,job_designation, job_location, company_name, salary, number_of_openings, skills_required, apply_by);
        const jobs = jobsModel.getAllJobs();
        // console.log(jobs);
        res.render('jobListings',{jobs:jobs,  userEmail: req.session.userEmail, name:req.session.userName});
        // console.log(newJob);
    }
    static searchJob(req,res){
        const searchvalue = req.body.search;
        console.log(searchvalue);
        const matchedJobs = jobsModel.search(searchvalue);
        // const jobs = jobsModel.getAllJobs();
        console.log(matchedJobs);
        res.render('jobListings',{jobs:matchedJobs, userEmail: req.session.userEmail, name:req.session.userName});

    }

}
import ApplicantModel from '../models/applicant.model.js';
import JobsModel from '../models/jobs.model.js';
const jobsModel = new JobsModel();

const applicantModel = new ApplicantModel();
export default class ApplicantController{
    getApplicant(req,res){
        // console.log(applicantModel.getAllApplicant());
        const id = req.params.id;
        // console.log(id);
        const applicants = applicantModel.getApplicants(id);
        // console.log(applicants);
        res.render('applicants',{applicants:applicants, userEmail: req.session.userEmail, name:req.session.userName});
    }
    postApplicant(req,res){
        const jobId = req.params.id;
        const {name, email, contact} = req.body;
        const resumePath =
        'resume/' + req.file.filename;
        applicantModel.add(jobId, name, email, contact, resumePath);
        console.log(`Id of job is: ${req.params.id}`);
        console.log(req.body)
        const jobs = jobsModel.getAllJobs();
        // console.log(jobs);
        res.render('jobListings',{jobs:jobs, userEmail: req.session.userEmail, name:req.session.userName});
    }
}
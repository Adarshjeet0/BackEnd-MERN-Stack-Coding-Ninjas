export default class JobsModel{
    constructor(category, designation, location, companyName, salary, totalOpenings, skills, lastDate){
        this.id = JobsModel.id;
        JobsModel.id +=1;
        this.category = category;
        this.designation = designation;
        this.location = location;
        this.companyName = companyName;
        this.salary =salary;
        this.totalOpenings = totalOpenings;
        this.skills =skills;
        this.lastDate =lastDate;
        this.applicant = 0;
    }
    static id = 4;
    static jobs = [
        {
            'id':1,
            'category':'SDE',
            'designation':'HR',
            'location':'Noida',
            'companyName':'CodingNinjas',
            'salary':'6Lpa',
            'totalOpenings':40000,
            'skills':["HTML", "CSS", "JavaScript","NodeJs", "Express", "MongoDB","Bootstrap"],
            'lastDate':'24/09/2024',
            'applicant':0,
        },
        {
            'id':2,
            'category':'SDE',
            'designation':'HR',
            'location':'Noida',
            'companyName':'Emis',
            'salary':'6Lpa',
            'totalOpenings':2000,
            'skills':["HTML", "CSS", "JavaScript", "MongoDB","Bootstrap"],
            'lastDate':'24/09/2024',
            'applicant':0,
        },
        {
            'id':3,
            'category':'Tech',
            'designation':'HR',
            'location':'Delhi',
            'companyName':'PW Skills',
            'salary':'10Lpa',
            'totalOpenings':400,
            'skills':["NodeJs", "Express", "MongoDB","Bootstrap"],
            'lastDate':'24/09/2024',
            'applicant':0,
        },

    ];

    getAllJobs(){
        return JobsModel.jobs;
    }
    addNewJob(category, designation, location, companyName, salary, totalOpenings, skills, lastDate){
        const newJob = new JobsModel(
            category,
            designation,
            location,
            companyName, 
            salary,
            totalOpenings,
            skills,
            lastDate
        );
        JobsModel.jobs.push(newJob);
    }

    getJobById(id){
        // console.log(id);
        const job = JobsModel.jobs.find(job => job.id == id);
        // console.log(job);
        return job;
    }

    // searchJob(value){
    //     const numValue = parseFloat(value);
    //     const searchResult = JobsModel.jobs.filter(job => {
    //         return job.category.toLowerCase().includes(value.toLowerCase()) ||
    //         job.designation.toLowerCase().includes(value.toLowerCase()) ||
    //         job.location.toLowerCase().includes(value.toLowerCase()) ||
    //         job.companyName.toLowerCase().includes(value.toLowerCase()) ||
    //         job.salary == numValue ||
    //         job.totalOpenings == numValue ||
    //         job.skills.some(skill => skill.toLowerCase().includes(value.toLowerCase()));
    //     });
    //     return searchResult;
    // }

    search(value) {
        let lowerCaseValue = '';  // Initialize an empty string for text search
        let numValue = null;  // Initialize null for numeric search
    
        // Check if the value is a string or a number
        if (typeof value === 'string') {
            lowerCaseValue = value.toLowerCase();  // Convert string to lowercase
        } else if (!isNaN(value)) {
            numValue = parseFloat(value);  // Parse the value as a number for salary and openings
        }
    
        const searchResult = JobsModel.jobs.filter(job => {
            return job.category.toLowerCase().includes(lowerCaseValue);
        });
        return searchResult;
    }

    updateAplicants(totalApplicants, id){
        const job = JobsModel.jobs.find(job => job.id == id);
        job.applicant = totalApplicants;
    }

}
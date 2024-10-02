export default class ApplicantModel{
    constructor(jobId, name, email, contact, resumePath){
        this.id = ApplicantModel.universalId;
        this.jobId = jobId
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.resumePath = resumePath;
        ApplicantModel.universalId += 1;
    }

    add(jobId, name, email, contact, resumePath){
        const newApplicant = new ApplicantModel(
            jobId,
            name,
            email,
            contact,
            resumePath
        );
        ApplicantModel.applicants.push(newApplicant);
    }
    getAllApplicant(){
        return ApplicantModel.applicants;
    }
    static applicants = [
        {
            'jobId':1,
            'id':1,
            'name':'John Doe',
            'email':'john.doe@example.com',
            'contact':'1234567890',
            'resumePath':'/resume/view',
        },
    ];
    static universalId = 1;

    getApplicants(id){
        return ApplicantModel.applicants.filter(applicant => applicant.jobId == id);
    }
}
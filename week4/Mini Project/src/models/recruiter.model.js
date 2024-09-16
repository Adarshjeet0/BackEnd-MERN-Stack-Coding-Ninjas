export default class RecruiterModel{
    constructor(name, email, password){
        this.id = RecruiterModel.universalId++;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    add(name, email, password){
        const newRecruiter = new RecruiterModel(
            name,
            email,
            password,
        )
        RecruiterModel.recruiters.push(newRecruiter);
    }
    isValidRecruiter(email, password){
        return RecruiterModel.recruiters.find(recruiter => recruiter.email == email && recruiter.password == password);
    }

    static recruiters = [];
    static universalId = 0;
}
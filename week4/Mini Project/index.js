import express from 'express';
import path from 'path';
import jobSeeker from './src/controllers/home.controller.js';
import ApplicantController from './src/controllers/applicant.controller.js';
import RecruiterController from './src/controllers/recruiter.controller.js';
import ejsLayouts from 'express-ejs-layouts';
import {uploadFile} from './src/middlewares/fileUpload.middleware.js';
import session from 'express-session';
import {auth} from './src/middlewares/auth.middleware.js';

const server = express();
const applicantController = new ApplicantController();
const recruiterController = new RecruiterController();

server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(),'src','views'));


server.use(ejsLayouts);
server.use(express.urlencoded({extended:true}));
server.use(express.static('./src/views'));
server.use(express.static('./public'));

server.use(session({
    secret:'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie:{secure:false},
  }));


server.get('/', jobSeeker.index);
server.get('/jobListings', jobSeeker.jobListings);
server.get('/job/:id', jobSeeker.jobDetails);
server.get('/login', recruiterController.getLogin);
server.post('/login', recruiterController.postLogin);
server.get('/register', recruiterController.getRegister);
server.post('/register', recruiterController.postRegister);
server.get('/addNewJob',auth, jobSeeker.getNewJob);
server.post('/addNewJob',auth, jobSeeker.postNewJob);
server.get('/applicants/:id',auth, applicantController.getApplicant);
server.post('/apply/:id', uploadFile.single('resume'), applicantController.postApplicant);
server.get('/logout',auth, recruiterController.logout);
server.post('/search', jobSeeker.searchJob);
// server.get('/applicants', jobSeeker.searchJob);
// server.post('/',auth,uploadFile.single('imageUrl'),validateRequest, productController.addNewProduct)

server.use(express.static('./src/views'))
server.use(express.static('./src/style'))
server.use(express.static('./public'))



server.listen(5000);
console.log("Server is running on port number 5000");
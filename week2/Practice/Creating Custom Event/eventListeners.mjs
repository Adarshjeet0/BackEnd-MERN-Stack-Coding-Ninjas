import { UserEvents } from './userEvent.mjs'


const userEvent = new UserEvents();

function  saveToDatabase() {
    console.log("Save to database");
}

function  sendNotification() {
    console.log("Notification send");
}

function  updateTimeline() {
    console.log("Timeline updated");
}

userEvent.addListener('postCreated',saveToDatabase);
userEvent.addListener('postCreated',sendNotification);
userEvent.addListener('postCreated',updateTimeline);

userEvent.createPost('This is my first post')


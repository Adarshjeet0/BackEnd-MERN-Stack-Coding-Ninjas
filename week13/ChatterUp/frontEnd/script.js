const inputFieldEl = document.getElementById("inputField");
const sendMessageBtnEl = document.getElementById("send-message-btn");
const chatBodyEl = document.getElementById("chat-body");
const nameFormEl = document.getElementById("nameForm");
const userNameEl = document.getElementById("userName");
const mainContainerEl = document.getElementById("main-container");
const loginContainerEl = document.getElementById("login-container");
const connectedUserContainerEl = document.getElementById("connected-user-container");
const welcomeUserEl = document.getElementById("welcome-user");
let userName = '';
nameFormEl.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = userNameEl.value.trim();
    if(username){
        userName = username;
        loginContainerEl.classList.add('d-none')
        mainContainerEl.classList.remove('d-none')
        socket.emit('newUser', {username});
    }

});
sendMessageBtnEl.addEventListener('click', (e)=>{
    e.preventDefault();

    const message = inputFieldEl.value.trim();
    if(message){
        socket.emit('message',{message, userName});
    }
    inputFieldEl.value = '';
    // console.log("clicked");
});


socket.on("welcomMessage", (message)=>{
    welcomeUserEl.textContent = message;
});

socket.on("addUser",(newUser)=>{
    const newEl = document.createElement('div');
    newEl.innerHTML = `
                <div class="user d-flex border border-primary justify-content-center align-items-center">
                    <div class="indicator"></div>
                    <div class="user-name">${newUser.username}</div>
                </div>`;
    connectedUserContainerEl.appendChild(newEl);
});

socket.on("newMessage", (data) => {
    const newEl = document.createElement("div"); // Create a new div element
    newEl.classList.add('message-container')
    newEl.innerHTML = `
            <div class="icon-msg-container right">
                <div class="user-icon">
                    <img src="./pics/bird.jpeg" alt="" style="height: 40px; width: 40px;">
                </div>
                <div class="message sender">
                    <div class="name-timestamp d-flex justify-content-between">
                        <p>Adarsh</p>
                        <p>02:03</p>
                    </div>
                    <p>${data.message}</p>
                </div>
            </div>`;
    chatBodyEl.appendChild(newEl); // Append the newly created element
});

socket.on("newMessageOtherUser", (data) => {
    const newEl = document.createElement("div"); // Create a new div element
    newEl.classList.add('message-container')
    newEl.innerHTML = `
            <div class="icon-msg-container">
                <div class="user-icon">
                    <img src="./pics/bird.jpeg" alt="" style="height: 40px; width: 40px;">
                </div>
                <div class="message receiver">
                    <div class="name-timestamp d-flex justify-content-between">
                        <p>Adarsh</p>
                        <p>02:03</p>
                    </div>
                    <p>${data.message}</p>
                </div>
            </div>`;
    chatBodyEl.appendChild(newEl); // Append the newly created element
});

socket.on("load_message", messages =>{
        messages.forEach(message => {
            const mongoTimestamp = new Date(message.createdAt); // Replace 'chatDocument' with your document
            const hours = mongoTimestamp.getHours().toString().padStart(2, '0');
            const minutes = mongoTimestamp.getMinutes().toString().padStart(2, '0');

            const time = `${hours}:${minutes}`;
            const newEl = document.createElement('div')
            newEl.classList.add('message-container');
            if(userName === message.userName){
                newEl.innerHTML = 
                    `<div class="icon-msg-container right">
                        <div class="user-icon">
                            <img src="./pics/bird.jpeg" alt="" style="height: 40px; width: 40px;">
                        </div>
                        <div class="message sender">
                            <div class="name-timestamp d-flex justify-content-between">
                                <p>${message.userName}</p>
                                <p>${time}</p>
                            </div>
                            <p>${message.message}</p>
                            
                        </div>
                    </div>`;
            }else{
                newEl.innerHTML = 
                    `<div class="icon-msg-container">
                        <div class="user-icon">
                            <img src="./pics/bird.jpeg" alt="" style="height: 40px; width: 40px;">
                        </div>
                        <div class="message receiver">
                            <div class="name-timestamp d-flex justify-content-between">
                                <p>${message.userName}</p>
                                <p>${time}</p>
                            </div>
                            <p>${message.message}</p>
                            
                        </div>
                    </div>`;
            }
            
            chatBodyEl.appendChild(newEl);
                
        });

})

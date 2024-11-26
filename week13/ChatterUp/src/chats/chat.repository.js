import ChatModel from './chat.schema.js';
export default ChatRepository{

    async addChat(message, username){
        try {
            const newChat = await ChatModel(message, username);
            newChat.save();
            return newChat;
        } catch (error) {
            console.log(error);
        }
    }
    async getChat(){
        try {
            const chats = await ChatModel.find();
            return chats;
        } catch (error) {
            console.log(error);
        }
    }
}
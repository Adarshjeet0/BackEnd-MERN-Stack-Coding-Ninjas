import ChatRepository from './chat.repository.js';
export default class ChatController{
    constructor(){
        this.chatRepository = new ChatRepository();
    }
    async addChat(req, res){
        try {
            const {message, username} = req.body;
            const result = await this.chatRepository.addChat(message, username);
            res.status(201).send({success: true, result});
        } catch (error) {
            console.log(error);
            res.status(401).send({
                success: false,
                message:"Something went wrong"
            });
        }
    }
    async getChat(req, res){
        try {
           const result = await this.chatRepository.getChat();
           res.status(200).send({success: true, result}); 
        } catch (error) {
            console.log(error);
            res.status(401).send({
                success: false,
                message:"Something went wrong"
            });
        }
    }
}
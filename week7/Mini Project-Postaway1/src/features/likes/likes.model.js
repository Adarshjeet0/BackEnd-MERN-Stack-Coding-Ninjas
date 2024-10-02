export default class LikeModel{
    let id = 0;
    constructor(userId, postId){
        this.id = ++id;
        this.userId = userId;
        this.postId = postId;
    }

    
}
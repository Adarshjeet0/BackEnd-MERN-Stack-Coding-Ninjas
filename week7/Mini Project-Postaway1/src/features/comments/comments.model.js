export default class CommentModel{
    static id = 0;
    constructor(usrId, postId, content){
        this.id = ++CommentModel.id;
        this.usrId = usrId;
        this.postId = postId;
        this.content = content;
    }

    static getAll(postId){
        return comments.filter(comment => comment.postId == postId);
    }

    static addComment(userId, postId, content){
        const newComment = new CommentModel(userId, postId, content);
        comments.push(newComment);
        return newComment;
    }

    static updateComment(commentId, newContent){
        const commentIndex = comments.findIndex(comment => comment.id == commentId);
        if(commentIndex != -1){
            comments[commentIndex].content = newContent; 
            return comments[commentIndex];
        }
    }

    static deleteComment(commentId){
        const commentIndex = comments.findIndex(comment => comment.id == commentId);
        if(commentIndex>=0){
            comments.splice(commentIndex, 1);
            return comments;
        }
    }



    
}

let comments = [
    new CommentModel(1, 1, "This is a comment"),
    new CommentModel(2, 1, "This is another comment"),
    new CommentModel(3, 2, "This is a comment on post 2"),
];

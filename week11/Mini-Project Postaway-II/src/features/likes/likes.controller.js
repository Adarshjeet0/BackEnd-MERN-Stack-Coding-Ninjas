import LikeModel from './likes.model.js';
export default class LikeController{
    static getAll(req, res){
        const postId = parseInt(req.params.postId);
        const likes = LikeModel.getAll(postId);
        if(likes.length>0){
            return res.status(200).send(likes);
        }
        else{
            return res.status(404).send("No likes found");
        }

    }

    static toggleLike(req, res){
        const postId = parseInt(req.params.postId);
        const userId = req.userId;
        const newLike = LikeModel.toggleLike(userId, postId);
        if(newLike){
            return res.status(200).send(newLike);
        }
        return res.status(404).send("Like removed");
    }
}

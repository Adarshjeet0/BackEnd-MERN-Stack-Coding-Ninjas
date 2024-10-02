import PostModel from './posts.model.js';
export default class PostController{
    static getAll(req, res){
        const posts = PostModel.getAll();
        return res.status(400).send(posts); 
    }

    static getById(req, res){
        const id = req.params.id;
        const post = PostModel.getById(id);
        if(post){
            return res.status(200).send(post);
        }
        return res.status(500).send("No match found");
    }

    static addPost(req, res){
        const {userId, caption, imageUrl} = req.body;
        const post = PostModel.addPost(userId, caption, imageUrl);
        if(post){
            return res.status(400).send(post);
        }
        return res.status(503).send("Failed to add post");
    }

    static update(req, res){
        const id = req.params.id;
        // console.log(req);
        const {userId, caption, imageUrl} = req.body;
        const post = PostModel.updatePost(id, caption, imageUrl);
        if(post){
            return res.status(200).send(post)
        }
        return res.status(500).send("Not updated");
    }

    static delete(req, res){
        const id = req.params.id;
        const post = PostModel.deletePost(id);
        if(post){
            return res.status(200).send(post);
        }
        return res.status(503).send("No match found to delete the post");
    }


}



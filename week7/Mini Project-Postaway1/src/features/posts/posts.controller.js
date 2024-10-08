import PostModel from './posts.model.js';
export default class PostController{
    static getAll(req, res){
        const posts = PostModel.getAll();
        return res.status(400).send(posts); 
    }

    static getById(req, res){
        const id = req.params.postId;
        const post = PostModel.getById(id);
        if(post){
            return res.status(200).send(post);
        }
        return res.status(500).send("No match found");
    }

    static addPost(req, res){
        // console.log(req.body);
        const imageUrl = req.file.filename;
        const userId = req.userId;
        console.log(userId);
        const {caption} = req.body;
        // console.log(imageUrl);
        const post = PostModel.addPost(userId, caption, imageUrl);
        if(post){
            return res.status(200).send(post);
        }
        return res.status(503).send("Failed to add post");
    }

    static update(req, res){
        const id = req.params.postId;
        console.log(id);
        const userId = req.userId;
        const {caption} = req.body;
        const imageUrl = req.file.filename;;
        
        const post = PostModel.updatePost(id, caption, imageUrl);
        if(post){
            return res.status(200).send(post)
        }
        return res.status(500).send("Not updated");
    }

    static delete(req, res, next){
        try {
            const id = req.params.postId;
            const post = PostModel.deletePost(id);
            res.status(200).send(post);
            
        } catch (error) {
            console.log(error);
            res.status(404).send("Post not found");
            next(error);
        }
        // if(post){
        // }
        // return res.status(503).send("No match found to delete the post");
    }

    static filterPosts(req, res){
        const {value} = req.body;
        const posts = PostModel.filterPosts(value);
        if(posts){
            return res.status(200).send(posts);
        }
        return res.status(500).send("No match found");
    }


}



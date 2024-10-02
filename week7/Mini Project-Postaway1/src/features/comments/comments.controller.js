import express from 'express';
import CommentsModel from './comments.model.js';

export default class CommentsController{
    static getComment(req, res){
        const postId = req.params.postId;
        // console.log(postId);
        const {userId, content} = req.body;
        const comments = CommentsModel.getAll();
        console.log(comments);
        res.status(200).send(comments);
    }

    static addComment(req, res){
        const postId = req.params.postId;
        
        const {userId, content} = req.body;
        const comment = CommentsModel.addComment(userId, postId, content);
        if(comment){
            return res.status(201).send(comment);
        }
        return res.status(400).send("Failed to add Comment");
    }

    static updateComment(req, res){
        const commentId = req.params.commentId;
        const {content} = req.body;
        const updatedComment = CommentsModel.updateComment(commentId, content);
        if(updatedComment){
            return res.status(200).send(updatedComment);
        }
        return res.status(400).send("No comment found to update");
    }

    static deleteComment(req, res){
        const commentId = req.params.commentId;
        const comments = CommentsModel.deleteComment(commentId);
        if(comments){
            return res.status(200).send(comments);
        }
        return res.status(404).send("No match found");
    }

    
}
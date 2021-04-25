const express =require( 'express');
const PostMessage = require("../models/postMessage");
const router = express.Router();
const getPosts = async (req, res) => {
  
  try {
    const postMessages = await PostMessage.find();
    return(
    res.status(200).json(postMessages));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  res.send("THIS WORKDS !");
};
const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const updatePost = async (req, res) => {
  
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;
  if(id!=undefined){
    if (!require( 'mongoose').Types.ObjectId.isValid(id.toString())) {
      return res.status(404).send(`No post with id: ${id}`);
    }
  }

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};
module.exports = { getPosts, createPost, updatePost ,router};

const express=require("express");

const router=express.Router();

const{
    deletePost,
    getPosts,
    createPost,
}=require("../controllers/postController");

router.get("/",getPosts);
module.exports=router;

router.post("/",createPost);

router.delete("/:id",deletePost);
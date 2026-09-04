const express=require("express");

const router=express.Router();

const{
    deletePost,
    getPosts,
    createPost,
    updatePost,
    getPostById,
    likePost,
}=require("../controllers/postController");

router.get("/",getPosts);

router.get("/:id",getPostById);

router.post("/",createPost);

router.post("/:id/like",likePost)

router.delete("/:id",deletePost);

router.put("/:id",updatePost)

module.exports=router;

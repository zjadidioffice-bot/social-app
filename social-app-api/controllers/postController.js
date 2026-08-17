const Post=require("../models/Post");

const getPosts=async(req,res)=>{
    try {
        const posts=await Post.find().sort({createdAt:-1,});
        res.json(posts);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        });
    }
};

const createPost=async(req,res)=>{
    try {
        const{author,content,likes}=req.body;
        if(!author || !content){
            return res.status(400).json({
                message:"author and content are required"
            });
        }
        const post=await Post.create({
            author,
            content,
            likes
        });

        res.status(201).json(post);

    } catch (error) {
        res.status(500).json({
            message:error.message,
        });
    }
}

const deletePost=async(req,res)=>{
    try {
            console.log("ID:", req.params.id);

        const post=await Post.findByIdAndDelete(req.params.id);

        if(!post){
            return res.status(404).json({
                message:"post not found"
            });
        }
        res.json({
            message:"post delete successfully"
        });
    } catch (error) {
            console.log(error);

        res.status(500).json({
            message:error.message
        });
    }
};

const updatePost=async(req,res)=>{
    try {
        const post=await Post.findByIdAndUpdate(req.params.id,
            {author:req.body.author,
            content:req.body.content,
            },
            {
                returnDocument:"after",
            }
        );
        res.json(post)
    } catch (error) {
        res.status(500).json({
            message:error.message,
        });
    }
};

module.exports={
    updatePost,
  deletePost,
    getPosts,
    createPost,
};
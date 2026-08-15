const mongoose=require("mongoose");

const postSchema=new mongoose.Schema(
    {
        author:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
        likes:{
            type:Number,
            default:0,
        },
    },
    {
        timestamps:true,
    }
);

module.exports=mongoose.model("Post",postSchema);
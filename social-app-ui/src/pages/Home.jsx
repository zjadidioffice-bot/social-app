import { useEffect, useState } from "react";
import Post from "../components/Post";

function Home() {
    const [posts, setPosts] = useState([]);
    const [editingPost,setEditingPost]=useState(null);
    const [editingContent,setEditingContent]=useState("");
    const handleEdit=async(id)=>{
        const post=posts.find(
            (post)=>post._id===id
        );

        setEditingPost(post);
        setEditingContent(post.content);

        console.log("edit",id);
        console.log("edit",post);
    }
    
    const handleSave=async()=>{
        try {
            const response=await fetch(`http://localhost:3000/api/posts/${editingPost._id}`,
               {
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    author:editingPost.author,
                    content:editingContent,
                }),
               } 
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete=async(id)=>{
        try {
            await fetch(`http://localhost:3000/api/posts/${id}`,{
                method:"DELETE",
            });
            setPosts((prevPosts)=>
            prevPosts.filter((post)=>post._id!==id)
            )
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetch("http://localhost:3000/api/posts")
            .then((response) => response.json())
            .then((data) => {
                console.log("posts", data)
                setPosts(data);
            })
            .catch((error) => {
                console.log(error)
            })
            ;
    }, []);

    return (
        <div>
            <h1>Social App</h1>
            <h2>Posts</h2>

            {editingPost && (
                <div>
                    <h2>editing post</h2>
                    <textarea
                    value={editingContent}
                    onChange={(e)=>
                        setEditingContent(e.target.value)
                    }
                    rows="5"
                    cols="40"
                    />
                    <br/>
                    <button onClick={handleSave}>save</button>
                    <button
                    onClick={()=>setEditingPost(null)}
                    >cancle</button>
                </div>
            )}

            {posts.map((post) => {
                return (
                    <Post
                        key={post._id}
                        id={post._id}
                        author={post.author}
                        content={post.content}
                        likes={post.likes}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                );
            })}
        </div>
    );
}

export default Home;

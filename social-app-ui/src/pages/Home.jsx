import { useEffect, useState } from "react";
import Post from "../components/Post";

function Home() {
    const [posts, setPosts] = useState([]);

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

    return (<div>
        <h1>Social App</h1>
        <h2>Posts</h2>
        {posts.map((post) => {
            return            (
                <Post
                    key={post._id}
                    id={post._id}
                    author={post.author}
                    content={post.content}
                    likes={post.likes}
                />
            );
        })}
    </div>
    );
}

export default Home;

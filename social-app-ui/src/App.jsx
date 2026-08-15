import {useEffect,useState} from "react"
import Post from "./components/Post"
function App() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/api/posts")
    .then((response)=>response.json())
    .then((data)=>{
      setPosts(data);
    });
  },[]);
  return (
    <div>
      <h1>Social App</h1>

      <h2>Posts</h2>

      {
        posts.map((post)=>
        (
                    <Post
          key={post._id}
          author={post.author}
          content={post.content}
          likes={post.likes}
          />
        )

        )
      }

    </div>
  );
}

export default App;
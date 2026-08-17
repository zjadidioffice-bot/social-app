import { useEffect, useState } from "react"
import Post from "./components/Post"
function App() {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "DELETE"
      });
      setPosts((prevPosts) =>
        prevPosts.filter((post) => post._id !== id)
      );
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author,
          content,
        }),
      });
      const newPost = await response.json();
      setPosts([newPost, ...posts])
      console.log(newPost)
      setMessage("پست با موفقیت ثبت شد")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div>
      <h1>Social App</h1>
      <h2>create post</h2>
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <p>{author}</p>
      <br /><br />
      <textarea
        placeholder="write your post"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <p>{content}</p>

      <br /><br />
      <button onClick={handleSubmit}>create post</button>
      {message && <p>{message}</p>}
      <h2>Posts</h2>

      {
        posts.map((post) =>
        (
          <Post
            key={post._id}
            author={post.author}
            content={post.content}
            likes={post.likes}
            onDelete={handleDelete}
          />
        )

        )
      }

    </div>
  );
}

export default App;
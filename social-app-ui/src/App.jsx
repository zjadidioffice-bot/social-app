import { useEffect, useState } from "react"
import Post from "./components/Post"
import { Routes,Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import SinglePost from "./pages/SinglePost"
function App() {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [editingPost, setEditingPost] = useState(null);
  const [editingContent, setEditingContent] = useState("");

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/${editingPost._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            author:editingPost.author,
            content:editingContent,
          }),
        }
      );
      const updatePost=await response.json();
      console.log(updatePost)
      setPosts(posts.map((post)=>post._id===updatePost._id?updatePost:post));

    } catch (error) {
      console.log(error)
    }
  };
  const handleEdit = (id) => {
    const post = posts.find(
      (post) => post._id === id
    );
    setEditingPost(post)
    setEditingContent(post.content);
    console.log("EDIT", id)
    console.log("EDIT", post)

  };

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
<>
<nav>
  <Link to="/">Home</Link>
  {"|"}
  <Link to="/create">craete post</Link>
</nav>

  <Routes>

    <Route
      path="/"
      element={
      <Home
      posts={posts}
      onDelete={handleDelete}
      onEdit={handleEdit}
      />
    }
    />

    <Route
      path="/create"
      element={<CreatePost />}
    />

    <Route
      path="/post/:id"
      element={<SinglePost />}
    />

  </Routes>
</>



    // <div>
    //   <h1>Social App</h1>
    //   <h2>create post</h2>
    //   <input
    //     type="text"
    //     placeholder="Author"
    //     value={author}
    //     onChange={(e) => setAuthor(e.target.value)}
    //   />
    //   <p>{author}</p>
    //   <br /><br />
    //   <textarea
    //     placeholder="write your post"
    //     value={content}
    //     onChange={(e) => setContent(e.target.value)}
    //   />
    //   <p>{content}</p>

    //   <br /><br />
    //   <button onClick={handleSubmit}>create post</button>
    //   {message && <p>{message}</p>}
    //   <h2>Posts</h2>
    //   {
    //     editingPost && (
    //       <div>
    //         <h2>editing post</h2>
    //         <textarea
    //           value={editingContent}
    //           onChange={(e) => setEditingContent(e.target.value)}
    //           rows="5"
    //           cols="40"
    //         />
    //         <br />
    //         <button onClick={handleSave}>save</button>
    //         <button
    //           onClick={() => setEditingPost(null)}
    //         >
    //           cancle
    //         </button>
    //       </div>
    //     )
    //   }
    //   {
    //     posts.map((post) =>
    //     (
    //       <Post
    //         key={post._id}
    //         id={post._id}
    //         author={post.author}
    //         content={post.content}
    //         likes={post.likes}
    //         onDelete={handleDelete}
    //         onEdit={handleEdit}
    //       />
    //     )

    //     )
    //   }

    // </div>
  );
}

export default App;
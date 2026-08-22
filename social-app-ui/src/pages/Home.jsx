import Post from "../components/Post"
function Home({ posts, onDelete, onEdit }) {
    return
    (
        <div>
            <h1>Home Page</h1>
            <h2>posts</h2>

            
       {
        posts.map((post) =>
        (
          <Post
            key={post._id}
            id={post._id}
            author={post.author}
            content={post.content}
            likes={post.likes}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        )

        )
      }
        </div>

    )
}
export default Home;
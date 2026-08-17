function Post({ id,author, content, likes,onDelete }) {
    return (
        <div>
            <h3>{author}</h3>
            <p>{content}</p>
            <button>
                ❤️ {likes}
            </button>
            <button
            onClick={()=>onDelete(id)}
            >
                DELETE
            </button>
        </div>
    );
}
export default Post;
function Post({ author, content, likes }) {
    return (
        <div>
            <h3>{author}</h3>
            <p>{content}</p>
            <button>
                ❤️ {likes}
            </button>
        </div>
    );
}
export default Post;
function Post({ id, author, content, likes, onDelete,onEdit }) {
    return (
        <div>
            <h3>{author}</h3>
            <p>{content}</p>
            <button>
                ❤️ {likes}
            </button>
            <button
                onClick={() => {
                    console.log("DELETE CLICKED", id);
                    onDelete(id)
                }
                }
            >
                DELETE
            </button>
                <button
                onClick={()=>
                {
                            console.log("EDIT BUTTON CLICKED");
        console.log("onEdit:", onEdit);
        console.log("id:", id);
                    onEdit(id)
                }
                    
}
                >
                    EDIT
                </button>

        </div>
    );
}
export default Post;
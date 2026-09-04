import { Link } from "react-router-dom"
function Post({ id, author, content, likes, onDelete, onEdit, onLike }) {
    return (
        <div>
            <h3>{author}</h3>
            <Link to={`/post/${id}`}>
                <p>{content}</p>
            </Link>
            <button onClick={()=>onLike(id)}> 
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
                onClick={() => {
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
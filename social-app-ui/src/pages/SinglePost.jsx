import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function SinglePost() {
    const { id } = useParams();
    console.log("post id", id);

    const [post, setPost] = useState(null);

    const handleLike = async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/posts/${id}/like`,
                {
                    method: "POST",
                }
            );
            const updatedPost = await response.json();
            setPost(updatedPost)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetch(`http://localhost:3000/api/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("SinglePost", data);
                setPost(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div>
            <h1>Single Post</h1>
            {post && (
                <div>
                    <h2>{post.author}</h2>
                    <p>{post.content}</p>
                    <button onClick={handleLike}>
                        ❤️{post.likes}
                    </button>

                </div>
            )}

        </div>
    );

}

export default SinglePost;  
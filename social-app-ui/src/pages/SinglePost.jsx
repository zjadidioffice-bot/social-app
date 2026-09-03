import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function SinglePost() {
    const { id } = useParams();
    console.log("post id", id);

    const [post, setPost] = useState(null);

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
            { post && (
                <div>
                    <h2>{post.author}</h2>
                    <p>{post.content}</p>
                    <p>❤️{post.likes}</p>
                </div>
            )}

        </div>
    );

}

export default SinglePost;  
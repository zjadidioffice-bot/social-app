import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {

    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/posts",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        author,
                        content,
                    }),
                }
            );

            const newPoST = await response.json();

            console.log("new post", newPoST);
            setMessage("پست با موفقیت ایجاد شد")

            setAuthor("");
            setContent("");

            setTimeout(() => {
                navigate("/");

            }, 1000);

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <h1>Create Post</h1>
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />

            <br />

            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <br />

            <button onClick={handleSubmit}>
                create post
            </button>

            {message && <p>{message}</p>}
        </div>
    );
}

export default CreatePost;
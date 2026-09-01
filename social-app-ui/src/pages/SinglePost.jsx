import {useParams} from "react-router-dom"
function SinglePost(){
    const {id}=useParams();
    console.log("post id",id);

    return (
    <div>
    <h1>Single Post</h1>
    <p>post id:{id}</p>
    </div>
    );
    
}

export default SinglePost;  
import React from "react";
import s from "./NewPost.module.css"

function NewPost(props){

    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }

    return(
        <div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>add post</button>
        </div>
    )
}

export default NewPost;
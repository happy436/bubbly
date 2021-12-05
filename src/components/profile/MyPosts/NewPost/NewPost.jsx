import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../data/profileReducer";
import s from "./NewPost.module.css"



function NewPost(props){

    let newPostElement = React.createRef();

    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return(
        <div>
            <textarea 
                ref={newPostElement} 
                onChange={onPostChange} 
                value ={props.newPostText}
            />
            <button onClick={addPost}>add post</button>
        </div>
    )
}

export default NewPost;
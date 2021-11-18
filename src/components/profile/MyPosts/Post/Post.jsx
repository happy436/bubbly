import React from "react";
import s from "./Post.module.css"

function Post(props){
    return(
        <div>
            <div className={s.item}>
                {props.message}
            </div>
            <div>Likes: {props.likesCount}</div>
        </div>
    )
}

export default Post;
import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import NewPost from "./NewPost/NewPost";

function MyPosts(props){

    let postElements = props.posts.map( (p) => {return <Post message={p.postMessage} id={p.id} likesCount={p.likesCount}/>})

    return(
        <div>
            My posts
            <NewPost addPost={props.addPost}/>
            <div>
                {postElements}
            </div>
      </div>
    )
}

export default MyPosts;
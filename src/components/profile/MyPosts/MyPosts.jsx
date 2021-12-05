import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

function MyPosts(props){
    let postsElement = 
        props.posts.map( p => <Post message={p.postMessage} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return(
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <div>
                        <textarea 
                            onChange = {onPostChange}
                            ref = {newPostElement}
                            value = {props.newPostText}
                        />
                    </div>
                    <div>
                        <button onClick={onAddPost}>AddPost</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;
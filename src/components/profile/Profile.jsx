import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {

    /* props = data = [posts, newPostText], addPost */
    return (
    <div className={s.profile}>
        <ProfileInfo/>
            <MyPosts
                posts={props.data.posts} 
                dispatch={props.dispatch}
                newPostText={props.data.newPostText}
            />
    </div>
    );
}

export default Profile;

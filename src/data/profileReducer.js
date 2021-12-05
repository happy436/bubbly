const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts:[
        {id:0, postMessage:"post1", likesCount:2},
        {id:1, postMessage:"post2", likesCount:3},
        {id:2, postMessage:"post3", likesCount:4},
        {id:2, postMessage:"post4", likesCount:5}
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id:5,
                postMessage:state.newPostText,
                likesCount:0,
            }
            state.posts.push(newPost);
            state.newPostText = ""
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state

        default:
            return state
    } 
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type:UPDATE_NEW_POST_TEXT, 
        newPostText:text
    }
}

export default profileReducer
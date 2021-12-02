const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let store = {
    _state: { 
        profilePage:{
            posts:[
                {id:0, postMessage:"post1", likesCount:2},
                {id:1, postMessage:"post2", likesCount:3},
                {id:2, postMessage:"post3", likesCount:4},
                {id:2, postMessage:"post4", likesCount:5}
            ],
            newPostText: ''
        },
        messagesPage:{
            dialogs:[
                {id:1 , name:'user1'},
                {id:2 , name:'user2'},
                {id:3 , name:'user3'},
                {id:4 , name:'user4'},
            ],
            messages:[
                {id:1 , message:'hi'},
                {id:2 , message:'hiyi'},
                {id:3 , message:'yo'},
                {id:4 , message:'qwerty'},
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    _addPost() {
        let newPost = {
            id:5,
            postMessage:this._state.profilePage.newPostText,
            likesCount:0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        if(action.type === ADD_POST){
            this._addPost()
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._updateNewPostText(action.newText)
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {type:UPDATE_NEW_POST_TEXT, newText:text}
}

window.store = store;

export default store;
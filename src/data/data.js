import messagesReducer from "./messagesReducer"
import profileReducer from "./profileReducer"

let store = {
    _state: { 
        profilePage:{
            posts:[
                {id:0, postMessage:"post1", likesCount:2},
                {id:1, postMessage:"post2", likesCount:3},
                {id:2, postMessage:"post3", likesCount:4},
                {id:2, postMessage:"post4", likesCount:5}
            ],
            newPostText: '',
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
            ],
            newTextMessage: "",
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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)
    }
}

window.store = store;

export default store;
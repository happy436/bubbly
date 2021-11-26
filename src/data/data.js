import { reRender } from "../render";

let state = { 
    profilePage:{
        posts:[
            {id:0, postMessage:"post1", likesCount:2},
            {id:1, postMessage:"post2", likesCount:3},
            {id:2, postMessage:"post3", likesCount:4},
            {id:2, postMessage:"post4", likesCount:5}
        ]
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
    
}

export let addPost = (post) => {
    
    let newPost = {
        id:5,
        postMessage:post,
        likesCount:0,
    }
    state.profilePage.posts.push(newPost);
    reRender(state)
}

export default state;
const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
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

const messagesReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE: 
            let body = state.newTextMessage
            let newMessage = {
                id:6,
                message:body,
            }
            state.messages.push(newMessage);
            state.newTextMessage = ""
            return state

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newTextMessage = action.newMessageText
            return state

        default:
            return state
    } 
}

export const sendMessageActionCreator = () => {
    return{
        type:SEND_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type:UPDATE_NEW_MESSAGE_TEXT, 
        newMessageText:text
    }
}

export default messagesReducer
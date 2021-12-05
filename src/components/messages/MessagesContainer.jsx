import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../data/messagesReducer';
import Messages from './Messages';

function MessagesContainer(props){

    let state = props.store.getState()

    let onNewMessageChange = (body) => {
        let action = updateNewMessageTextActionCreator(body)
        props.store.dispatch(action)
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    return(
        <Messages 
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messagesPage={state.messagesPage}
        />
    )
}

export default MessagesContainer;
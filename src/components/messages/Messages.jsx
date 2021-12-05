import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../data/messagesReducer';
import Dialog from './dialog/Dialog';
import Message from './message/Message';
import s from "./Messages.module.css"

function Messages(props){

    let dialogsElements = props.data.dialogs.map( (d) => {return <Dialog name={d.name} id={d.id}/>});
    let messagesElements = props.data.messages.map( (m) => {return <Message message={m.message} id={m.id}/>});
    let newMessageText = props.data.newTextMessage

    let onNewMessageChange = (event) => {
        let newMessage = event.target.value;
        let action = updateNewMessageTextActionCreator(newMessage)
        props.dispatch(action)
    }

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }

    return(
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea 
                            value={newMessageText}
                            onChange={onNewMessageChange}  
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;
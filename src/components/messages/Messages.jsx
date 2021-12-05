import React from 'react';
import Dialog from './dialog/Dialog';
import Message from './message/Message';
import s from "./Messages.module.css"

function Messages(props){

    let state = props.messagesPage

    let dialogsElements = state.dialogs.map( (d) => {return <Dialog name={d.name} id={d.id}/>});
    let messagesElements = state.messages.map( (m) => {return <Message message={m.message} id={m.id}/>});
    let newMessageText = state.newTextMessage

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body)
    }

    let onSendMessageClick = () => {
        props.sendMessage()
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
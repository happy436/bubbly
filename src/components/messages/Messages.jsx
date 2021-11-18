import react from 'react';
import { NavLink } from 'react-router-dom';
import Dialog from './dialog/Dialog';
import Message from './message/Message';
import s from "./Messages.module.css"

function Messages(props){

    let dialogsElements = props.dialogs.map( (d) => {return <Dialog name={d.name} id={d.id}/>});

    let messagesElements = props.messages.map( (m) => {return <Message message={m.message} id={m.id}/>});

    return(
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Messages;
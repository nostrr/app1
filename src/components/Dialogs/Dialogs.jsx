import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElement = props.messagesData.map(message => <Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                {
                    messagesElement
                }
            </div>
        </div>
    );
};

export default Dialogs
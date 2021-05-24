import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElement = props.messagesData.map(message => <Message message={message.message}/>);

    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () =>{
        props.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    };



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs
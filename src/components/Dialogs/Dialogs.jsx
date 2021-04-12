import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
};

const Message = (props) =>{
    return(
        <div className={s.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Alex' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Teti' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Viktor' id='5'/>
                <DialogItem name='Valera' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How is your MMA'/>
                <Message message='Yo'/>
            </div>
        </div>
    );
};

export default Dialogs
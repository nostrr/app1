import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import state, {addPost} from "./redux/state";

addPost('Hello Aleksey');


ReactDOM.render(
    <React.StrictMode>
        <App dialogsProps={state.dialogsProps} postsProps={state.postsProps} addPost={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost} from "./redux/state";

function App(props) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*  <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>*/}
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsProps.dialogsData}
                                                                  messagesData={props.dialogsProps.messagesData}
                                                                  newMessageBody={props.dialogsProps.newMessageBody}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/profile'
                           render={() => <Profile postsProps={props.postsProps} dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

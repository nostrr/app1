import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

let MyPosts = (props) => {

    let postItems = props.postsProps.postsData.map((p => {
        return <Post message={p.message} likesCount={p.likesCount}/>
    }));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let changeTextArea = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts </h2>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={changeTextArea} value={props.postsProps.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postItems}
            </div>
        </div>
    );
}

export default MyPosts;
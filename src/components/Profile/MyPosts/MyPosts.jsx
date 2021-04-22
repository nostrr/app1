import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

let MyPosts = (props) => {

    let postItems = props.postsData.map((p => {
        return <Post message={p.message} likesCount={p.likesCount}/>
    }));

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts </h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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
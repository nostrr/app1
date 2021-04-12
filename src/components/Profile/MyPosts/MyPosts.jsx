import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

let MyPosts = () =>{
    return(
            <div className={s.postsBlock}>
                <h2>My posts </h2>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message='Hi, how are you?' likesCount={0}/>
                    <Post message="It's my first post" likesCount={23}/>
                </div>
            </div>
    );
}

export default MyPosts;
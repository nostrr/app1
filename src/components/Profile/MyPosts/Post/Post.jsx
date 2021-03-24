import React from 'react';
import s from './Post.module.css';

let Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://sci-fi-news.ru/wp-content/uploads/2017/06/Transformers-5-poster-Optimus-Prime-850x545.jpg"/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;
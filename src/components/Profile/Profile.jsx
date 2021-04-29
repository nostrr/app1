import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsProps={props.postsProps} dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;
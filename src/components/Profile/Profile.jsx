import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";

let Profile = (props) =>{

    return(
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsProps} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;
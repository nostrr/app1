import React from 'react';
import MyPosts from "./MyPosts/MyPosts";

let Profile = () =>{
    return(
        <div>
            <div>
                 <img  src="http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;
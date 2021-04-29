const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        dialogsProps: {
            dialogsData: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Tetti'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],

            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your MMA'},
                {id: 3, message: 'Yo'}
            ]
        },

        postsProps: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: "It's my first post", likesCount: 23}
            ],
            newPostText: 'LuKoN'
        },
    },

    _callSubscriber () {
        console.log('state changed');
    },

    getState(){
        return this._state;
    },

    subscribe(observer){
      this._callSubscriber = observer;
    },

    addPost ()  {
        let newPost = {
            id: 3,
            message: this._state.postsProps.newPostText,
            likesCount: 0
        }
        this._state.postsProps.postsData.push(newPost);
        this._state.postsProps.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText){
        this._state.postsProps.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 3,
                message: this._state.postsProps.newPostText,
                likesCount: 0
            }
            this._state.postsProps.postsData.push(newPost);
            this._state.postsProps.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.postsProps.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => {

    return {
        type : ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type : UPDATE_NEW_POST_TEXT,
        newText : text
    }
}

export default store;
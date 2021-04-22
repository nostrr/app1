let state = {
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

    postsProps: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: "It's my first post", likesCount: 23}
    ]
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    }
    state.postsProps.push(newPost);
}

export default state
import { createStore } from 'redux'

function reducer(state = [], action) {
    switch (action.type) {
    case 'TOGGLE_USER_SIDEBAR':
        return { ...state, showUsers: !state.showUsers }
    case 'ADD_CHAT':
        var newState = { ...state,
            chats: [...state.chats, action.chat ]
        }
        newState.users.add(action.chat.user)
        newState.colors[action.chat.user] = action.randomColor
        return newState
    default:
        return state
    }
}

let store = createStore(reducer, {
    chats: [],
    users: new Set(),
    colors: {},
	  user: 'user' + Math.floor(Math.random()*10000),
    showUsers: true
})

export default store
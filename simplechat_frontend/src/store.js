import { createStore, applyMiddleware } from "redux"
// const { List } = require('immutable')

const initialState = {

    messages: [],
    user: null,
    
}

function sendMessage(state, action){
    if(action.data.success != "true"){
        throw "invalid message"
    }
    return state
}

function listMessages(state, action){    
    return {...state, messages: action.data.messages}
}

function login(state, action){    
    return {...state, user: action.data.user }
}


function reducer(state = initialState, action){    
    switch (action.type){
        case "SEND_MESSAGE": return sendMessage(state, action);
        case "LIST_MESSAGES": return listMessages(state, action);
        case "LOGIN": return login(state, action);
        default: return state;
    }
}

const logger = store => next => action =>  {
    console.log("==========")
    console.log(action)
    console.log("current state: ")
    console.log(store.getState())
    
    const result = next(action)
    console.log("next state: ")
    console.log(store.getState())
    console.log("==========")   
}

const async = store => next => action =>  {
    if (typeof action === "function"){
        console.log("called as a function!")
        return action(store.dispatch)
    }

    return next (action)
}


export default  createStore(reducer, applyMiddleware(async, logger));
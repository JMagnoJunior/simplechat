import React from "react";
import { connect } from "react-redux"
import {sendMessage} from "./actions"

export  function ChatPanelController(props){
    return(
        <div>
             <input onChange={props.messageChange} value={props.input_newmessage} /> 
             <button onClick={props.sendMessageClick} > Send </button>
        </div>
    )
}


export default connect(
    state => state,
    (dispatch, props) => ({
        sendMessageClick: () =>  props.handle_click_sendmessage(dispatch, props.message, sendMessage),
        messageChange: (e) => props.handle_change_message(e.target.value)
    })
)(ChatPanelController);
import React from "react";
import { connect } from "react-redux"
import {sendMessage} from "./actions"

export  function ChatPanelController(props){
    return(
        <div className="m-3">                            
            <div className="row mb-1">
                <input type="text"  placeholder="say something..." className="form-control" onChange={props.messageChange} value={props.input_newmessage} /> 
            </div>
            <div className="row">
                <button className="btn-primary btn-lg btn-block" onClick={props.sendMessageClick} > Send </button>
            </div>
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
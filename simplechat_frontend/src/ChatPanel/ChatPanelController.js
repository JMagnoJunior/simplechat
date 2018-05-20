import React from "react";
import { connect } from "react-redux"
import {sendMessage} from "./actions"

export  function ChatPanelController(props){

    var input = null
    if(props.show_error){
        input = <input  id="message-input" type="text"  placeholder="say something..." className="form-control is-invalid" onChange={props.messageChange} value={props.input_newmessage} />         
        
    }else{
        input = <input id="message-input" type="text"  placeholder="say something..." className="form-control" onChange={props.messageChange} value={props.input_newmessage} /> 
    }
    
    return(
        <div className="m-3">                            
        <div className="row mb-1">
            { input }
        </div>
        <div className="row">
            <button id="send-message-btn" className="btn-primary btn-lg btn-block" onClick={props.sendMessageClick} > Send </button>
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
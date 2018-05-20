import React from "react"; 

import { connect } from "react-redux"
import { login } from "./actions"


export function LoginPanel(props){
    return(
        <div>
            <label> What your name? </label>
            <input id="login-input" onChange={props.userNameChange} value={props.input_user_name} />
            <button id="login-btn" onClick={props.loginClick} > Enter </button> 
            <br />
            <p id="error-msg" className="text-danger" >{ props.error_msg }</p>
        </div>
    )
}

export default connect(
    state => state,
    (dispatch, props) => ({
        loginClick: () =>  props.handle_click_login(dispatch, login),
        userNameChange: (e) => props.handle_change_username(e.target.value)
    })
)(LoginPanel);
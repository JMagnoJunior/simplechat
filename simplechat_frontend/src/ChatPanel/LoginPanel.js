import React from "react"; 

import { connect } from "react-redux"
import { login } from "./actions"


export function LoginPanel(props){

    let input = null
    if(props.error_msg){
        input = <input id="login-input" type="text" className="form-control is-invalid"  placeholder="What's your name?" onChange={props.userNameChange} value={props.input_user_name} />
    }else{
        input = <input id="login-input" type="text" className="form-control"  placeholder="What's your name?" onChange={props.userNameChange} value={props.input_user_name} />
    }

    return(
                
                <div className="form-inline">
                    <div className="form-group mb-2 col">
                        { input }                        
                        <button id="login-btn" className="btn btn-primary" onClick={props.loginClick} > Enter </button> 
                        <p id="error-msg" className="invalid-feedback" >{ props.error_msg }</p> 
                    </div>
                    
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
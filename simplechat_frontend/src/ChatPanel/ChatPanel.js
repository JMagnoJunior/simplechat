import React, { Component, Fragment } from "react"; 
import { Provider } from "react-redux";

import store from "./../store"
import LoginPanel from "./LoginPanel"
import MessagePanel from "./MessagePanel"
import ChatPanelController from "./ChatPanelController"

import { listMessages }  from "./actions"

let RELOAD_TIME = 5;

export default class ChatPanel extends Component {

    constructor(){
        super();
        let user_logged = JSON.parse(sessionStorage.getItem('user'))
        this.state = { 
            messages : store.getState().messages,
            user : (user_logged != null) ? user_logged: store.getState().user,
            inputUserName : "",
            inputNewMessage: "",
            logged: (user_logged != null) ? true : false,
            currentCount: RELOAD_TIME,
        }
    }

    componentWillMount() {        
        var intervalId = setInterval(this.timer, 1000);        
        this.setState({intervalId: intervalId});                  
        this.reloadState()                
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    handleClickLogin = (dispatch, login) => {
        dispatch(login({sender_name: this.state.inputUserName}))
        .then( () => { 
            sessionStorage.setItem("user", JSON.stringify(store.getState().user) )
            this.setState({logged: true, user: store.getState().user})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    handleClickSendMessage = (dispatch, message, sendMessage) => {
        
        dispatch(sendMessage({ message: {content: this.state.inputNewMessage}, sender: this.state.user }))
        .then( (result) => {
            this.setState({inputNewMessage : "" })
            this.reloadState()
        })
        .catch( (err) => {
            console.log(err)
        });
    }

    handleChangeUserName = (value) => {
        this.setState({ inputUserName: value })
    }

    handleChangeMessage = (value) => {
        this.setState({inputNewMessage: value})
    }

    reloadState = () => {
        store.dispatch(listMessages())
        .then( () => { 
            if(this.state.messages != store.getState().messages){
                this.setState({messages: store.getState().messages })
            }  
        })        
        .catch((err) => {
            console.log(err)
        })  
    }

    timer = () =>  {
        let newCount = this.state.currentCount - 1;
        if(newCount >= 0) { 
            this.setState({ currentCount: newCount });
        } else {
            this.reloadState()
            this.setState({ currentCount: RELOAD_TIME });
        }
     }

    render = () => {

        let panel = null

        if(this.state.logged){
            panel = (
                <div>
                    <MessagePanel  messages={this.state.messages} 
                                   user={this.state.user} 
                                   />

                    <ChatPanelController
                                         input_newmessage={this.state.inputNewMessage} 
                                         handle_change_message={this.handleChangeMessage}
                                         handle_click_sendmessage={this.handleClickSendMessage} 
                                         />
                </div>
            )
        }else{
            panel = (
                <LoginPanel handle_click_login={this.handleClickLogin} 
                            handle_change_username={this.handleChangeUserName} 
                            input_username={this.state.inputUserName}/>
            )
        }

        return (
                <div> 
                    <Provider store={store}>                        
                        <Fragment> 
                            { panel }
                        </Fragment>
                    </Provider>
                </div>            
                )
    }
}
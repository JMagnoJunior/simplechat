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
            errorInputUserName : "",            
            inputNewMessage: "",
            errorInputMessage : "",
            logged: (user_logged != null) ? true : false,
            currentCount: RELOAD_TIME,
        }
    }

    isUserValid() {
        let result = false;
        if(this.state.inputUserName.length <= 0){
            this.setState({errorInputUserName: "Invalid User Name" } )
            result = false;
        }else{
            result = true
            this.setState({errorInputUserName: "" } )
        }   
        console.log(result)     
        return result;
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
        if(this.isUserValid()){
            dispatch(login({sender_name: this.state.inputUserName}))
            .then( () => {                 
                this.setState({logged: true, user: store.getState().user})
                sessionStorage.setItem("user", JSON.stringify(this.state.user) )
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    handleClickSendMessage = (dispatch, message, sendMessage) => {
        
        dispatch(sendMessage({ message: {content: this.state.inputNewMessage}, sender: this.state.user }))
        .then( (result) => {
            this.setState({inputNewMessage : "", errorInputMessage : "" })
            this.reloadState()
        })
        .catch( (err) => {
            this.setState({errorInputMessage : err })
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
            if(this.state.messages !== store.getState().messages){
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
                <Fragment> 
                    <MessagePanel  messages={this.state.messages} 
                                   user={this.state.user} 
                                   />
                    
                    <ChatPanelController
                                         input_newmessage={this.state.inputNewMessage}
                                         show_error={this.state.errorInputMessage}
                                         handle_change_message={this.handleChangeMessage}
                                         handle_click_sendmessage={this.handleClickSendMessage} 
                                         />
                </Fragment> 
            )
        }else{
            panel = (
                
                <Fragment> 
                    <p > 
                        This is the simplechat app and here are some things that worth to mention:                    
                    <ul>
                       <li> Many users can have the same name. it will be identified by its resource uri; </li>
                       <li> I am not using websocket in this example. It use simple a timer to load new messages; </li>
                       <li> The back end with spring boot is ridiculous simple, but it has everything that we need to support this app; </li>
                       <li> This layout is awful;</li>
                    </ul>
                    </p>
                    
                    <LoginPanel handle_click_login={this.handleClickLogin} 
                            handle_change_username={this.handleChangeUserName} 
                            input_username={this.state.inputUserName} 
                            error_msg={this.state.errorInputUserName} />
                </Fragment> 
                
            )
        }

        return (
                <div> 
                    <Provider store={store}>                        
                        <Fragment> 
                        <div className="container">
                            <h2> Simple Chat </h2>
                            { panel }
                        </div>
                        </Fragment>
                    </Provider>
                </div>            
                )
    }
}
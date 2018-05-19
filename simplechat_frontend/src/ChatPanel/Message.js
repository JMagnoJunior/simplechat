import React from "react"; 

export default class  Message extends React.Component {

    constructor() {
        super();
        this.state = { 
            sender: {},
            sender_message: false
        };
    }

    componentWillMount() {        
         fetch(this.props.sender.href).then((result) => {             
            result.json().then( (sender) => {
                if(this.state.sender!= sender){
                    if(sender._links.self.href == this.props.user._links.self.href){
                        this.setState({sender: sender, sender_message: true})
                    }else{
                        this.setState({sender: sender, sender_message: false})
                    }                    
                 } 
            } )                      
         })       
    }

    componentWillUnmount() {        
    }
    
    render = () => {
        let displayMessage = null;
        
        if(this.state.sender_message){
            displayMessage = (
                <div class="card">
                    <div class="card-header  bg-primary ">{this.state.sender.name}</div> 
                    <div class="card-body">                                        
                        <div>{this.props.content}</div>
                        
                    </div>
                    <div class="card-footer bg-transparent">{this.props.when}</div>
                </div>
            )
        }else{
            displayMessage = ( 
                <div>    
                    <div>{this.state.sender.name}</div>
                    <div>{this.props.content}</div>
                    <div>{this.props.when} </div>
                </div>
            )
        }

        return (
            displayMessage
        )
    }
}
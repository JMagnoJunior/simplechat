import React from "react";
import Moment from 'moment';

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
            result.json()
            .then( (sender) => {
                if(this.state.sender!= sender){
                    if(sender._links.self.href == this.props.user._links.self.href){
                        this.setState({sender: sender, sender_message: true})
                    }else{
                        this.setState({sender: sender, sender_message: false})
                    }                    
                 } 
            } )
            .catch( (err) => {
                console.log(err)
            })                      
         })       
    }

    componentWillUnmount() {        
    }
    
    render = () => {
        Moment.locale('en');

        let displayMessage = null;
        
        if(this.state.sender_message){
            displayMessage = (
                <div className="card col m-3">
                    <div className="card-header bg-info ">{this.state.sender.name}</div> 
                    <div className="card-body">                                        
                        <div>{this.props.content}</div>                        
                    </div>                    
                    <div className="card-footer bg-transparent">{Moment(this.props.when).format('MMMM Do YYYY, h:mm:ss a')}</div>
                </div>
            )
        }else{
            displayMessage = ( 
            <div className="card col m-3 bg-light">
                <div className="card-header bg-secondary">{this.state.sender.name}</div> 
                <div className="card-body">                                        
                    <div>{this.props.content}</div>                    
                </div>                
                <div className="card-footer bg-transparent">{Moment(this.props.when).format('MMMM Do YYYY, h:mm:ss a')}</div>
            </div>
            )
        }

        return (            
             displayMessage             
        )
    }
}
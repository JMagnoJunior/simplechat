import React from "react"; 

export default class  Message extends React.Component {

    constructor() {
        super();
        this.state = { user: {} };
    }


    componentWillMount() {        
         fetch(this.props.sender.href).then((result) => {             
            result.json().then( (sender) => {
                if(this.state.user!= sender){                
                    this.setState({user: sender})
                 } 
            } )                      
         })       
    }

    componentWillUnmount() {        
    }
    
    render = () => (
        <div>
             <div>{this.state.user.name}</div>
             <div>{this.props.content}</div>
             <div>{this.props.when} </div>
        </div>
    )
}
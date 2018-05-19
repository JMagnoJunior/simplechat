import React from "react"; 

import Message from "./Message"

export default function MessagePanel(props){
    let messages = props.messages.map((m, k) => ( 
        <div key={k} className="row">
            <Message key={k} content={m.content} sender={m._links.sender} when={m.when} user={props.user} user_message={true} />
        </div>
      )) ;

    return(            
         messages 
    )
}
import React from "react"; 

import Message from "./Message"

export default function MessagePanel(props){
    let messages = props.messages.map((m, k) => (<Message key={k} content={m.content} sender={m._links.sender} when={m.when}  /> ) ) ;
    return(
        <div>
                <h2>This is The Chat Panel</h2>
                <div>
                    { messages }
                </div>
        </div>
    )
}
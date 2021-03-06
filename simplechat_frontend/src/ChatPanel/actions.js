import axios from "axios"

const CREATED = 201

var instance = axios.create({    
    baseURL:  (process.env.REACT_APP_SIMPLECHAT_SERVICE)? process.env.REACT_APP_SIMPLECHAT_SERVICE: "http://localhost:8080/"
    
  });

export function sendMessage( {message, sender } ){    

    return dispatch => 
    instance.post("messages", message)
    .then( (response) => {
            if(response.status === CREATED){
                return axios({method: 'PUT',
                        headers: { 'content-type': 'text/uri-list' } ,
                        url: response.data._links.sender.href, 
                        data: sender._links.self.href
                    })
                            
            }else{
                throw new Error("Error Creating User")
            }
        
        }
    ).then( (response) => {      
        return dispatch({
            type: "SEND_MESSAGE",
            data: { success : "true" }
        })
    })
    .catch((err) => {
        console.log(err)
        return dispatch({
            type: "SEND_MESSAGE",
            data: { success : "false" }
        })
    } ) 
}

export function listMessages(){
    return dispatch => 
    instance.get("messages/search/findAllByOrderByIdAsc")
    .then( (response_message) => {
        
        let result = response_message.data._embedded.messages
        
        dispatch({
            type: "LIST_MESSAGES",
            data: { messages: result }
        })      
    })
    .catch( (err)=> {
        console.log(err)
    })
}

export function getSender(){

}

export function login({sender_name}){
    return dispatch => instance.post("senders", {"name": sender_name})
    .then( (response) => {        
        dispatch({
            type: "LOGIN",
            data: {user: response.data}
        })
    })
    .catch( (err) => {
        console.log(err)
    })
}
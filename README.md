# simplechat
just a simple chat app - react + spring boot

## Introduction
This project is divided in two parts. 
The front end is a react app (/simplechat_frontend) and the back end is a spring boot service (/simplechat)


## The back end
Using the @RepositoryRestResource this backend is so simple that I have nothing to say about it. 
It has just two model class and its resources. 
It worth to test if both resource exists, that's why I created two tests for them.

resources available: 
  * /senders
  * /messages


## The front end
I am not a really front end developer. I know how to developer using React, but I never worked with it in a real project.
Maybe some choices that I made for this project can not scale so well. 

I am using a redux library to manage the state of my application. I decided to put in the store only the data loaded from API's.
I am not sure if I should put all my state there or but for now it is working well. 


/ChatPanel
   actions.js  -> methods that dispatch a event to the store
   ChatPanel.js -> the main component on this source. It will call the other components and it cotains the state of the application
   ChatPanelController.js -> It will render the input to send messages. It is a high order component which join the dispatch and the props to send them to the handler in the ChatPanel.
   LoginPanel.js -> It will render the first screen asking for a user name. It is another high order component.
   Message.js -> It will render the message and it has its own state. When a message is loaded, we have only the URI for its sender. We need to fetch the sender information and save this information as a state in this component.
   MessagePanel.js -> It just list all the Message components.
   

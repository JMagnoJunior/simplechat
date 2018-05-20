import React from 'react';
import ChatPanelController from './ChatPanelController';
import { expect } from 'chai';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
configure({ adapter: new Adapter() });
import { Provider } from "react-redux";

import store from "./../store"


describe('<ChatPanelController />', () => {
   
    it("should has send message button", () => {
        
        const handleClickSendMessage = sinon.spy()
        const handleChangeMessage = sinon.spy()
        
        const wrapper = mount(
            <Provider store={store}>                        
                <ChatPanelController input_newmessage=" "  
                handle_change_message={handleChangeMessage}
                handle_click_sendmessage={handleClickSendMessage} />
            </Provider>
        )
        
        wrapper.find('#send-message-btn').simulate('click');
        expect(handleClickSendMessage).to.have.property('callCount', 1)
    }) 

    it("should handle changes in message input", () => {
        
        const handleClickSendMessage = sinon.spy()
        const handleChangeMessage = sinon.spy()
        
        const wrapper = mount(
            <Provider store={store}>                        
                <ChatPanelController input_newmessage=""  
                handle_change_message={handleChangeMessage}
                handle_click_sendmessage={handleClickSendMessage} />
            </Provider>
        )
        
        wrapper.find('#message-input').simulate('change');
        expect(handleChangeMessage).to.have.property('callCount', 1)
    }) 

    it("should show error when message entered is invalid", () => {
        
        const handleClickSendMessage = sinon.spy()
        const handleChangeMessage = sinon.spy()
        const MESSAGE_TEXT = ""
        const wrapper = mount(
            <Provider store={store}>                        
                <ChatPanelController input_newmessage={MESSAGE_TEXT}
                handle_change_message={handleChangeMessage}
                handle_click_sendmessage={handleClickSendMessage}
                show_error="error"
                 />
            </Provider>
        )
        
        expect(wrapper.find('.is-invalid')).to.have.length(1)
    
    })
        
    it("should show the value in message input", () => {
        
        const handleClickSendMessage = sinon.spy()
        const handleChangeMessage = sinon.spy()
        const MESSAGE_TEXT = "message"
        const wrapper = mount(
            <Provider store={store}>                        
                <ChatPanelController input_newmessage={MESSAGE_TEXT}
                handle_change_message={handleChangeMessage}
                handle_click_sendmessage={handleClickSendMessage} 
                show_error=""/>
            </Provider>
        )
        
        expect(wrapper.find('#message-input').props().value).to.equals(MESSAGE_TEXT)
    
    })

   


})


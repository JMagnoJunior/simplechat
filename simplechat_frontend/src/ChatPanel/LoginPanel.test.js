import React from 'react';
import LoginPanel from './LoginPanel';
import { expect } from 'chai';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
configure({ adapter: new Adapter() });
import { Provider } from "react-redux";

import store from "./../store"


describe('<LoginPanel />', () => {

    it("should has a login button ", () => {
        const handleClickLogin = sinon.spy()
        const handleChangeUserName = sinon.spy()
    
        const wrapper = mount(
            <Provider store={store}>
                <LoginPanel handle_click_login={handleClickLogin} 
                                    handle_change_username={handleChangeUserName} 
                                    input_username="" 
                                    error_msg="" />
            </Provider>
        )

        wrapper.find('#login-btn').simulate('click');
        expect(handleClickLogin).to.have.property('callCount', 1)

    })

    it("should handle changes in login input ", () => {
        const handleClickLogin = sinon.spy()
        const handleChangeUserName = sinon.spy()
    
        const wrapper = mount(
            <Provider store={store}>
                <LoginPanel handle_click_login={handleClickLogin} 
                                    handle_change_username={handleChangeUserName} 
                                    input_username="" 
                                    error_msg="" />
            </Provider>
        )

        wrapper.find('#login-input').simulate('change');
        expect(handleChangeUserName).to.have.property('callCount', 1)

    })

    it("should display error message ", () => {
        const handleClickLogin = sinon.spy()
        const handleChangeUserName = sinon.spy()
        const ERROR_MSG = "An error ocurred"
        const wrapper = mount(
            <Provider store={store}>
                <LoginPanel handle_click_login={handleClickLogin} 
                                    handle_change_username={handleChangeUserName} 
                                    input_username="" 
                                    error_msg={ERROR_MSG} />
            </Provider>
        )

        
        expect(wrapper.find('#error-msg').text()).to.equals(ERROR_MSG)

    })


})
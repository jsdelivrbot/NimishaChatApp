import React, {Component} from 'react';

/*
* Component for messages in the chat room
*/
export default class MessageTextArea extends Component{
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
       let messageList = document.getElementById('messageList');
       //scroll the view to see older messages
       messageList.scrollTop = messageList.scrollHeight;
    }
    
    render() {
        let messages = this.props.messageList.map((el, i) => {
            if (el.name === this.props.username) {
                return (
                    <li className = "newMessage" key = {i}>
                        <div className = "message">{el.message}</div>
                    </li>
                );
            }
            return (
                <li className = "oldMessage" key = {i}> 
                    <div className = "message">{el.message}</div>
                    <span className = "user">{el.name}</span>
                </li>
            );
        });
        return (
            <ul className = "messages" id = "messageList">
                {messages}
            </ul>    
        );
    }
}

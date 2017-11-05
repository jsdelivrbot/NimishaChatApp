import React, {Component} from 'react';
import ChatService from '../services/chatService';

/*
* Component for entering message in the chat
*/
export default class MessageInputArea extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputMessage: ""
        }
        this.messageSubmitted = this.messageSubmitted.bind(this);
    }

    messageSubmitted(event) {
        event.preventDefault(); //To stop default propogation in textbox
        //If no room is selected return and don't post the message
        if(this.state.currChatRoomId === ""){
            return;
        }
        let msgObj = {name: this.props.username, message: this.state.inputMessage}
        ChatService.postMessage(this.props.currChatRoomId, msgObj, this.props.messageSubmitted);//calling parent components update message function
        //Setting input textbox to ""
        document.getElementById("messageTxtBox").value = "";
    }

    render() {
        return (
           <form className = "msgInputBx" onSubmit = {this.messageSubmitted}>
                <input id = "messageTxtBox" className = "form-control" type = "text" 
                onChange = {(event) => this.setState({inputMessage: event.target.value})} 
                placeholder = "Type a message..." required />
                <button className = "btn btn-link" type = "submit">Send</button>
            </form>    
   
        ); 
    }
}

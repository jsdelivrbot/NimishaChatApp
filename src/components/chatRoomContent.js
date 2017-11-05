import React, {Component} from 'react';
import MessageTextArea from './messageTextArea';
import MessageInputArea from './messageInputArea';
import ChatService from '../services/chatService';

/*
* Component for room details like users in the room and chat room messages
*/
export default class ChatRoomContent extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            currChatRoom: null,
            messageList: [] 
        }   
        this.updateMessageList = this.updateMessageList.bind(this);
    }

    //React Life cycle, ComponentDidUpdate is called after the render method. Similar to the componentDidMount, 
    //this method can be used to perform DOM operations after the data has been updated
    componentDidUpdate() {
        let roomId = (this.state.currChatRoom) ? this.state.currChatRoom.id : "";
        //return if roomid is emoty or already selected.
        if (this.props.currChatRoomId === "" || roomId === this.props.currChatRoomId) {
            return;
        }
        ChatService.getRoomData(this.props.currChatRoomId, 
            (data) => {this.setState({currChatRoom: data})
            console.log(this.state.currChatRoom)}
        );
        ChatService.getRoomMessages(this.props.currChatRoomId, 
            (data) =>{this.setState({messageList: data});
            console.log(this.state.messageList)}
        ); 
    }
    

    //Update list of available messages in DB.
    updateMessageList () {
        ChatService.getRoomMessages(this.props.currChatRoomId, 
            data => {this.setState({messageList: data}) 
            console.log(this.state.messageList)}
        );
    }



    render() {
        //If no chatroom, then return
        if (this.state.currChatRoom === null) {
            return null;
        }
        //convert user list obj array to html formatted <span> which can be rendered below.
        let users = this.state.currChatRoom.users.map((el, i) => {
            return (
                <span key = {el}>, {el}</span>
            );
        }); 
        return(
            <div>
            <div className = "roomContent">
                <span className = "roomName"> {this.state.currChatRoom.name} </span>
                <div className = "users">
                    <span className = "currentUser">{this.props.username}</span>{users}
                </div>
            </div>
            <MessageTextArea messageList = {this.state.messageList} username = {this.props.username} />
                <MessageInputArea currChatRoomId =  {this.props.currChatRoomId} username = {this.props.username}  
                messageSubmitted = {this.updateMessageList}/>
        </div>
        )

        
    }

}
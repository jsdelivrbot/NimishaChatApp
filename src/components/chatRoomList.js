import React, {Component} from 'react';
import ChatService from '../services/chatService';
import LoginTime from './loginTimer'

export default class ChatRoomList extends Component{
    constructor(props){
        super(props);
        this.state={
            chatRoomList: []
        }

    }

    //React life cycle, As soon as the render method has been executed the componentDidMount function is called.
    //The DOM can be accessed in this method, enabling to define DOM manipulations or data fetching operations
    componentDidMount(){
        ChatService.getRooms(
            data => {this.setState({chatRoomList: data});  console.log(this.state.chatRoomList);
        }
    );
       
    }

    render(){
        //Change list of room to html li element using map.

        console.log(this.state.chatRoomList);
        const chatRoomList = this.state.chatRoomList.map((el, i) => {
            //To change css style of selected chat index element
            let selectedClass = (this.props.currChatRoomId === el.id) ? "selected" : ""; 
            return (
                <li className = {selectedClass} key = {el.id} onClick = {() => this.props.selectChatRoom(el.id)}>
                    {el.name}
                </li>
            )
        });
        console.log(chatRoomList);
        //This renders all other chatroom list element from above conversion in form of <li> list elements
        return (
            <div>
                <div className = "userInfo">
                    <span className = "username">{this.props.username}</span>
                    <span className = "status">Online
                    <LoginTime startTime = {Date.now()} />
                    </span>
                </div>
                <ul className = "chatRoom">
                    {chatRoomList}  
                </ul>
            </div>
        )
    }
}
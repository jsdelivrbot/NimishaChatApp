 import React , {Component} from 'react';
 import ChatRoomList from './chatRoomList';
 import ChatRoomContent from './chatRoomContent';

/*
* This component shows a list of all chat rooms on the left and messages on the right as per specs
* Export this class/component, so as to be able to use it in other components(Id.js)
*/
export default class ChatMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            currChatRoomId: ""
        }
        this.selectChatRoom = this.selectChatRoom.bind(this);
    }

    //Called on clicking a chatroom from the list of chat rooms
    selectChatRoom(chatRoomId){
        this.setState({
            currChatRoomId:chatRoomId
        });
    }

    render(){
        return (
            <div>    
                <div className = "col-sm-4 col-md-4 col-lg-4 leftPanel">
                    <ChatRoomList currChatRoomId = {this.state.currChatRoomId} selectChatRoom = {this.selectChatRoom}
                               username = {this.props.username} />
                </div>

                <div className = "col-sm-8 col-md-8 col-lg-8 mainPanel">
                    <ChatRoomContent username = {this.props.username} currChatRoomId = {this.state.currChatRoomId} />
                </div>        
            </div>
        );
    }
}



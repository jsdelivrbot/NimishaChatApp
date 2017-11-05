import $ from 'jquery';

export default class ChatService {

    /*
    * Get available chatroomlist from server.js file
    * @param callback - callback function called after json data is read completely
    */
    static getRooms(callback) {
        return $.getJSON('http://localhost:8080/api/rooms')
            .then(data => callback(data));
    }

    /*
    * Gets Chat room content
    * @param roomId- This is the chat room Id for the currently selected chatroom
    * @param callback - callback function called after call returns
    */
    static getRoomData(roomId, callback) {
        return $.getJSON(`http://localhost:8080/api/rooms/${roomId}` )
        .then(data => callback(data));
    }

    /*
    * Gets all messages in a chat room
    * @param roomId - Chat room Id
    * @param callback - function to be called after getting the data completed
    */
    static getRoomMessages(roomId, callback) {
        return $.getJSON(`http://localhost:8080/api/rooms/${roomId}/messages` )
        .then(data => callback(data));
    }

    /*
    * Posts a message to the current chat room
    * @param roomId - Chat room Id
    * @data - i.e {name: username, message: message}.
    * @param callback - function to be called after post completed
    */
    static postMessage(roomId, data, callback) {
        $.post(`http://localhost:8080/api/rooms/${roomId}/messages`, data, callback);
    }
}
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ChatMain from './components/chatMain'

//Using ES6 and Babel to transpile it to ES5 for browser support.

//First Page, entrace point to the application

/* App Class 
* Extends Component of React
* return the Main chat page
*/
class Login extends Component {
  constructor(props) {
    // Calling parent class constructor and being able to access this.props by passing props
    super(props);
    this.state = {
        username: "",
        hasUsername: false
    }
    this.changeUserName = this.changeUserName.bind(this);
    this.submitUserName = this.submitUserName.bind(this);
  }

    changeUserName(event){
      this.setState({username: event.target.value});
    }

    submitUserName(event){
      //Returning false won't work to prevent default behavior of enter in React. We must call preventDefault explicitly.
      event.preventDefault(); 
      this.setState({hasUsername: true})
    }

  /*
     * This will renders the ChatApp if hasUsername is true else goto Login page
  */    

  render() {
    if (this.state.hasUsername && this.state.username !== "") {
      return (
        //return chatmain page
        <ChatMain username = {this.state.username} />
      );
  }//else return login page
  return (
      <form onSubmit = {this.submitUserName} className = "loginPage">
          <div>
              <input type="text" className = "form-control" onChange = {this.changeUserName} type = "text" 
                  placeholder = "Type your username..." required
              />
              <button type = "submit" className = "btn loginBtn">Join the DoorDash Chat!</button>
          </div>
      </form>
  );
}
}

ReactDOM.render(<Login/>, document.getElementById('container'));


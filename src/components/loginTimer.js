 import React , {Component} from 'react';
 import ReactDOM from 'react-dom';
 
// /*
// *This componenet calculates logged in time
// * 
// */
 export default class LoginTime extends Component{
     constructor(props){
         super(props);
         this.state = { elapsed: 0};
         this.tick = this.tick.bind(this)
     }

    
        componentDidMount(){
    
            // componentDidMount is called by react when the component 
            // has been rendered on the page. We can set the interval here:
    
            this.timer = setInterval(this.tick, 60000);
        }
    
        componentWillUnmount(){
    
            // This method is called immediately before the component is removed
            // from the page and destroyed. We can clear the interval here:
    
            clearInterval(this.timer);
        }
    
        tick(){
    
            // This function is called every 1 minute. It updates the 
            // elapsed counter. Calling setState causes the component to be re-rendered
            this.setState({elapsed: new Date() - this.props.startTime});
        }
    
        render() {
            
            // Calculate elapsed to 100th of a min:
            var elapsed = Math.round(this.state.elapsed / 100);
    
            // This will give a number with one digit:
            var minutes = (elapsed / 600).toFixed(0);    
    
            // Although we return an entire <p> element, react will smartly update
            // only the changed parts, which contain the seconds variable.
    
            return <div> for {minutes} minutes</div>;
        }
    }

    
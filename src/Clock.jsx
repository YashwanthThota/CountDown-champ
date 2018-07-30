import React, {Component} from 'react';
//import class
import './App.css'

class Clock extends Component{

constructor(props){
  super(props);
  this.state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
}

//It runs before the component completely renders onto the application
//this method is used to get the deadline data from App parent class
componentWillMount() {
  this.getTimeUntil(this.props.deadline);
}

//this one runs after the component completely renders onto the component
//we use this for update the time for every second
componentDidMount() {
  {/* it gets the dead line date for every second and pass it to getTimeUntil method*/}
  setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
}

//leading0 is used to add 0 before number i.e for example, 08 seconds instead of 8 seconds
leading0(num) {
  return num < 10 ? '0' + num : num;
}



getTimeUntil(deadline) {
  const time = Date.parse(deadline) - Date.parse(new Date());
  const seconds = Math.floor((time/1000) % 60);
  const minutes = Math.floor((time/1000/60) % 60);
  const hours = Math.floor(time/(1000*60*60) % 24);
  const days = Math.floor(time/(1000*60*60*24));
  this.setState({days, hours, minutes, seconds});
}

  render() {
    return (
      <div>
      <div className="Clock-days">{this.leading0(this.state.days)} days</div>
      <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
      <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
      <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default Clock;

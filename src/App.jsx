import React, {Component} from 'react';
//import clock Component
import Clock from './Clock';
//import css
import './App.css';
//import bootstrap
import {Form, FormControl, Button} from 'react-bootstrap';


class App extends Component {
 constructor(props) {
   super(props);
     this.state = {
       deadline: 'December 25,2018',
       newDeadline: ''
     }
 }

changeDeadline() {
  this.setState({deadline: this.state.newDeadline})
}

  render() {
    return(
      <div className="App">
      <div className="App-title">
      Countdown to {this.state.deadline}
      </div>

       {/* <Clock/> imports clock Component
         deadline prop send the parent component data to
           child component(CLock) using props */}
       <Clock
       deadline={this.state.deadline}/>
      <Form inline>
      <FormControl
      className="Deadline-input"
      placeholder='new date'
      onChange={event => this.setState({newDeadline: event.target.value})}
      />
      {/*We use ES6 anonymous function
      since having the function call alone will create loops
      But an anonymous function will call the function once */}
      <Button onClick={() => this.changeDeadline()}>
      Submit
      </Button>
      </Form>
      </div>
    )
  }
}

export default App;

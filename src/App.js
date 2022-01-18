import React, { Component } from "react";
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textarea: ''
    };
  }
  onHandleChange = (event) => {
    this.setState({
      textarea: event.target.value
    })
  }
  handleKeyChange = (event) => {
    if(event.which === 13 /* Enter */) {
      event.preventDefault();
      alert("Submitted Text");
      console.log(`textarea: ${this.setState.textarea}`);
      axios({
        method: "POST",
        url: 'http://localhost:8080/home',
        body: {
          StatusDetails: this.state.textarea}
      })
    }
    
  }
  render() {
    return(
      <div className="wrapper">
        <h5><i>Status Detais</i></h5>
        <form onKeyPress={this.handleKeyChange}>
        <textarea
        name="textarea"
        id="textarea"
        value={this.state.textarea}
        maxLength={1000000000}
        rows={5}
        placeholder="Text Area to enter Status and submit"
        onChange={this.onHandleChange.bind(this)}>
        </textarea>
        <br />
        </form>
      </div>
    )
  }
}
export default App;

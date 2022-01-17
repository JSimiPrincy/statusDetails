import React, { Component, useState } from "react";
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textarea: ''
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onKeyPress = this.handleKeyChange.bind(this);
  }
  onHandleChange = (event) => {
    this.setState({
      textarea: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.textarea);
  }
  handleKeyChange = (event) => {
    if(event.which === 13 /* Enter */) {
      event.preventDefault();
      this.setState({
        textarea: event.target.value
      })
      axios({
        method: "POST",
        url: 'http://localhost:8080/home',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.textarea)
      })
      .then(res => res.json())
      .then(data => {
        if(data.success) {
          this.setState({
            textarea: ''
          });
        }
      });
      alert("Submitted Text");
    }
    
  }
  render() {
    return(
      <div className="wrapper">
        <h5><i>Status Detais</i></h5>
        <form onSubmit={this.state.textarea}
        onKeyPress={this.handleKeyChange}>
        <textarea
        name="textarea"
        id="textarea"
        maxLength={1000000000}
        rows={5}
        placeholder="Text Area to enter Status and submit"
        value={this.state.textarea}
        onChange={(event) => this.onHandleChange(event)}>
        </textarea>
        <br />
        </form>
      </div>
    )
  }
}
export default App;

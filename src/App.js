import React, { Component, useState } from "react";
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.setState({
      textarea: ""
    });
  }
  handleSubmitForm = (event) => {
    event.preventDefault();
  }
  handleChange = (event) => {
    this.setState({
      textarea: event.target.value
    });
    
  }
  handleKeyChange = (event) => {
    if(event.which === 13 /* Enter */) {
      alert("Submitted Text");
      const textarea = document.getElementById('textarea').value
      axios({
        method: "POST",
        url: 'http://localhost:8080/home',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(textarea)
      }).then(res => res.json(textarea))
      event.preventDefault();
    }
  }
  render() {
    return(
      <div className="wrapper">
        <h5><i>Status Detais</i></h5>
        <form onSubmit={event => this.handleSubmitForm(event)}
        onChange={event => this.handleChange(event)}
        onKeyPress={event => this.handleKeyChange(event)}>
        <textarea
        name="textarea"
        id="textarea"
        value={this.setState.textarea}
        maxLength={1000000000}
        rows={5}
        placeholder="Text Area to enter Status and submit"
        onChange={event => this.handleChange(event)}>
        </textarea>
        <br />
        </form>
      </div>
    )
  }
}
export default App;

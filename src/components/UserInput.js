import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: "",
    hometown: ""
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleHometownChange = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = () => {
    this.props.store.dispatch({
      type: 'ADD_USER', 
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleUserChange}/>
          <input type="text" value={this.state.hometown} onChange={this.handleHometownChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;

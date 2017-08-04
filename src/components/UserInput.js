import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    hometown: '',
    username: ''
  }

  hometownChange = e => {
    this.setState({
      hometown: e.target.value
    })
  }

  usernameChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER', user: this.state})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='username' onChange={this.usernameChange} />
          <input type='text' placeholder='hometown' onChange={this.hometownChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;

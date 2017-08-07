import React, { Component } from 'react';

class UserInput extends Component {

  constructor(){
    super()
    this.state = {username: '', hometown: ''}
  }

  handleUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  handleHometownChange = (event) => {
    this.setState({hometown: event.target.value})
  }

  handleOnSubmit = () => {
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
          <input type='text' value={this.state.hometown} onChange={this.handleHometownChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;

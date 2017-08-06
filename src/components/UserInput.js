import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleNameChange = event => {
    this.setState({username: event.target.value})
  }

  handleTownChange = event => {
    this.setState({hometown: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER', user: this.state})
    this.setState({username: '', hometown: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Enter username...' value={this.state.username} onChange={this.handleNameChange}/>
          <input type='text' placeholder='Enter hometown...' value={this.state.hometown} onChange={this.handleTownChange}/>
          <input type='submit' value='Create User'/>
        </form>
      </div>
    );
  }
};

export default UserInput;

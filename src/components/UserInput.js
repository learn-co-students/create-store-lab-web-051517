import React, { Component } from 'react';
import manageBand from '../reducers/manageBand'

class UserInput extends Component {

  state = {
      username: '',
      hometown: ''
  }

  handleChangeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  handleChangeHometown = (event) => {
    this.setState({ hometown: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type='text' placeholder='Username' onChange={this.handleChangeUsername} />
          <input type='text' placeholder='Hometown' onChange={this.handleChangeHometown} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;

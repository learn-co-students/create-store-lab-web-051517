import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
      username: this.state.username,
      hometown: this.state.hometown
    }
    })
    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Enter Username'
            value={this.state.username}
            onChange={this.handleChange}
            name='username'
          />
          <input
            type='text'
            placeholder='Enter Hometown'
            value={this.state.hometown}
            onChange={this.handleChange}
            name='hometown'
          />
          <button type='submit'>Create</button>
        </form>
      </div>
    );
  }
};

export default UserInput;

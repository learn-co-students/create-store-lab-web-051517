import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value,
      hometown: event.target.value

   })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER',
    user: {username: this.state.username, hometown: this.state.hometown}

  })
  }
  render() {
    console.log(this.state.username)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Username</label>
            <input onChange={this.handleChange} value={this.state.username} name="username" type="text"/>
          <label>Hometown</label>
            <input onChange={this.handleChange} value={this.state.hometown} name = "hometown" type="text"/>
          <input type="submit"/>
          </form>
      </div>
    );
  }
};

export default UserInput;

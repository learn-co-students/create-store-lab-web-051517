import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  // handleChange = (event) =>{
  //   const name = event.target.name
  //   const value = event.target.value
  //
  //   this.setState({
  //     [name]: value
  //   })
  //   console.log(event.target.name)
  // }

  handleNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }


  handleHomeChange = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
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
          <label>Username</label>
            <input type="text" name='username' value={this.state.username} onChange={this.handleNameChange}/>
          <label>Hometown</label>
            <input type="text" name='hometown' value={this.state.hometown} onChange={this.handleHomeChange} />
          <input type="submit" />

        </form>

      </div>
    );
  }
};

export default UserInput;

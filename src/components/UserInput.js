import React, { Component } from 'react'

class UserInput extends Component {
  constructor(props) {
    super(props)
    
    this.state={
      username:'',
      hometown:''
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
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {username: this.state.username, hometown: this.state.hometown}
      // also can do -> user: this.state
    })
    this.setState({ 
      username:'',
      hometown:'' 
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder="username" onChange={this.handleChange}/>
          <input type='text' placeholder="your hometown" onChange={this.handleChange} />
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default UserInput

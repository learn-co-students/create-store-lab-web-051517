import React, { Component } from 'react'

class UserInput extends Component {
  constructor(props) {
    super(props)
    
    this.state={
      username:'',
      hometown:''
    }
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleChangeHometown = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
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
          <input type='text' placeholder="username" onChange={this.handleChangeUsername}/>
          <input type='text' placeholder="your hometown" onChange={this.handleChangeHometown} />
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default UserInput

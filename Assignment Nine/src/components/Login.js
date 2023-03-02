import React, { Component } from 'react'

 class Login extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           'message':''
        }
    }
    clickSubmitHandler = () => {
        this.setState({
            message : 'You have successfully loggedin! Thank you'
        })
    }
  render() {
    return (
      <div>Welocome to login page
      <div>{this.state.message}</div>
      <button onClick = {this.clickNameHandler}>name</button>
      <button onClick = {this.clickPasswordHandler}>password</button>
      <button onClick = {this.clickSubmitHandler}>onSubmit</button>
      </div>
    )
  }
}

export default Login
import React, {Component} from "react";

class Message extends Component {
    // render(){
    //     return <h1>class component</h1>
    // }

    //  render() {
    //      return <h1>
    //          Welcome Visitor </h1>
    //  }

    constructor(){
        super()
        this.state = {
             message : 'Wecome Visitor'
            }
    }
 
    changeMessage(){
        this.setState({
            message:'Thank you for subscribing'
        })
    }

render(){
    return(
    <div>
          <h1>{this.state.message}</h1>
          <button onClick={ () => this.changeMessage()}>Subscribe</button>
    </div>
    )
}
}

export default Message
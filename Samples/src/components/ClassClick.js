import React, { Component } from 'react'

export class ClassClick extends Component {
  
      classHandler() {
          console.log("button clicked")
      }
      render() {
    return (
      <div> 
      <button onClick = {this.classHandler}>ClickOn
      </button>
      </div>
    )
  }
}

export default ClassClick
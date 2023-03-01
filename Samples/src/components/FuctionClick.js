import React from 'react'

function FuctionClick() {
    function clickHandler() {
        console.log('Button clicked')

    }
  return (
    <div>
        <button onClick = {clickHandler}>click</button>
        {/* <button onClick = {clickHandler()}>click</button> donot add () paranthesis */}
        </div>
  )
}

export default FuctionClick
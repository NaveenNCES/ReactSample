import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.parentHandler('child component')}>Click me</button>
    </div>
  )
}

export default ChildComponent

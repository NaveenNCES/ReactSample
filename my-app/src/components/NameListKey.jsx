import React from 'react'

function NameListKey() {
    const names = ['Ravi', 'Ganesh', 'Chandru']
    const nameList = names.map((name, index) => <h1 key={name}>{index} {name}</h1>)
  return (
    <div>
      {nameList}
    </div>
  )
}

export default NameListKey
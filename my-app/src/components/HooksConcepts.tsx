import React, { useEffect, useState } from 'react'

const useDocumentTitle = (title: any)  =>{
    useEffect(() =>{
        document.title = title;
    }, [title])
}

function HooksConcepts() {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    useDocumentTitle(`You have clicked ${count} times`);    

  return (
    <div>
      <p>{document.title}</p>  
      <button onClick={incrementCount}>Click me</button>  
    </div>
  )
}

export default HooksConcepts

import React, { useEffect, useRef, useState } from 'react'

function HookRef() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <div>
            <input value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}></input>
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </div>
    )
}

export default HookRef

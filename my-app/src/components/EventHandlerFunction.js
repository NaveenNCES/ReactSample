import React, { Component } from 'react'

function EventHandlerFunction() {
    function clickHandler(){
        console.log('function click')
    }
    return (
        <div>
            <button onClick={clickHandler}>EventHandlerFunctionButton</button>
        </div>
    )
}

export default EventHandlerFunction

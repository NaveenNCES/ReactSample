import React, { Component } from 'react'

export class ClassEventHandler extends Component {
    ClickHandler() {
        console.log('Class Event');
    }
    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>ClassEventHandler</button>
            </div>
        )
    }
}

export default ClassEventHandler

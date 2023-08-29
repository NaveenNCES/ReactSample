import React, { Component } from 'react'

class RCESample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    IncreaseCount() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    render() {
        return (
            <div>
                <div>Count -{this.state.count}</div>
                <button onClick={() => this.IncreaseCount()}>Increment</button>
            </div>
        )
    }
}

export default RCESample

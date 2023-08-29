import React, { Component } from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Sample state message'
        }
    }

    changeStateMessage(){
        this.setState({
            message: 'Text changed with setState method'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeStateMessage()}>Change text using State</button>
            </div>
        )
    }
}

export default Message
import React, { Component } from 'react'

class FormSample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
            cource: ''
        }
    }

    onUserNameChanged = event =>{
        this.setState({
            userName: event.target.value
        })
    }
    onCommentsChanged = event =>{
        this.setState({
            comments: event.target.value
        })
    }

    onSelectionChanged = event =>{
        this.setState({
            cource: event.target.value
        })
    }

    onSubmittedForm = event =>{
        alert(`${this.state.userName}\n${this.state.comments}\n${this.state.cource}`)
    }

    render() {

        return (
            <form onSubmit={this.onSubmittedForm}>
                <div>
                    <label>Username: </label>
                    <input onChange={this.onUserNameChanged}
                        value={this.state.userName}
                        type='text'></input>
                </div>
                <div>
                    <label>Comment: </label>
                    <textarea onChange={this.onCommentsChanged}
                        value={this.state.comments}>
                    </textarea>
                </div>
                <div>
                    <label>Course: </label>
                    <select onChange={this.onSelectionChanged}
                        value={this.state.cource}>
                        <option>React</option>
                        <option>Angular</option>
                        <option>vue</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default FormSample

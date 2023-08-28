import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Method props'
      }

      this.parentComponent = this.parentComponent.bind(this)
    }
    
    parentComponent(childName) {
        alert(`Hello ${this.state.parentName} is from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent parentHandler={this.parentComponent} />
            </div>
        )
    }
}

export default ParentComponent

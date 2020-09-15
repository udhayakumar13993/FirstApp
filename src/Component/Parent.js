import React, { Component } from 'react'
import Child from './Child'
import Sibling from './Sibling'
export default class Parent extends Component {
  constructor(props){
      super(props)
          this.state={
              Name:"Udhay",
              Age:27,
              Id:1265622
          }
      
      this.handleChange=this.handleChange.bind(this)
  }
  handleChange(e){
      var target = e.target
      var val = target.value
      var name = target.name
      this.setState({
          [name]:val

      })
  }
    render() {
    return (
      <div className="row">
        <div className="column">
            <Child {...this.state} changeValue={this.handleChange}></Child>
        </div>
        <div className="column">
            <Sibling {...this.state} changeId={this.handleChange}></Sibling>
        </div>
      </div>
    )
  }
}

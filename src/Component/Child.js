import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <label>Name:</label>
        <input type="text" name="Name" onChange={this.props.changeValue}/>
        <br/><h1>{this.props.Id}</h1>
      </div>
    )
  }
}

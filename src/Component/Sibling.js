import React, { Component } from 'react'

export default class Sibling extends Component {
  render() {
    return (
      <div>
        <label>Id:</label>
        <input type="text" name="Id" onChange={this.props.changeId}/><br/>
        <h1>{this.props.Name}</h1>
      </div>
    )
  }
}
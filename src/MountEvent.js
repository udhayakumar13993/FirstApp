

import React, { Component } from 'react';

export default class ToTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: ""
    };
  }

  componentDidMount() {
     this.setState({ test: this.handleInputChange });
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }


  renderDiv() {
    if(this.state.test) {
      alert ("test is true")
    }
    else {
      alert ("test is false")
    }
  }
  render() {
    return (
      <div>{ this.renderDiv() }</div>
    );
  }
}
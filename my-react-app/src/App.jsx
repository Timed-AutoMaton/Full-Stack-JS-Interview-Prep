import React, { Component } from 'react'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }

  }
  componentDidMount() {
    console.log("componentDidMount: When component render first time");

  }
  increment() {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => { this.increment() }}>Click me</button>
      </div>
    )
  }
}

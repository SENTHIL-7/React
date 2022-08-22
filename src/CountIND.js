import React, { Component } from 'react'

export default class CountIND extends Component {

    state={count:0}

    increament = ()=>{
        this.setState(
            {count:this.state.count+1}
        )
    }
    decreament = ()=>{
        this.setState(
            {count:this.state.count-1}
        )
    }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increament}>+</button>
        <button onClick={this.decreament}>-</button>
      </div>
    )
  }
}

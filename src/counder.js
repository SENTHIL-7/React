import React, { Component } from 'react'

export default class Counder extends Component {

    constructor(props){
        super(props);
        this.state={count:0}
    }
  render() {
    return (
      <div>
        <p>the cound is : {this.state.count}</p>
      <button onClick={()=>this.setState({count:this.state.count+1})}>Click</button>
      </div>
    )
  }
}

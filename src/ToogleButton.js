import React, { Component } from 'react'
import './ToogleStyle.css';
export default class ToogleButton extends Component {
  constructor (props){
    super(props);
    this.state ={isOn:false}; 
    this.changeToogle=this.changeToogle.bind(this);

  }
  changeToogle(){
    this.setState(state=>({
     isOn:!state.isOn
    }))
  }
  render() {
    return (
      <button onClick={this.changeToogle}>
        Toogle : {this.state.isOn?"on":"off"}</button>
    )
  }
}

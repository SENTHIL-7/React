import React, { Component } from 'react'

export default class Form extends Component {

  constructor (props){
    super(props);
       this.state={
        userName:null
       }
       this.onChangeHandler=this.onChangeHandler.bind(this);
  }
 onChangeHandler=(e)=>{
  this.setState(
    {userName:e.target.value}
  )
 }
  render() {
    return (
      <div>
        <from>
          <p>Enter the Name :</p>
          <input type={"text"} onChange={this.onChangeHandler}/>
          <p>display name : {this.state.userName}</p>

        </from>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Form extends Component {

  constructor (props){
    super(props);
       this.state={
        userName:'',
        age:null
       }
      
  }
 onChangeHandler=(e)=>{
  let num =e.target.name;
  let val =e.target.value;
  this.setState({[num]:val}
  )
 }
 onSubmitHandler = (e)=>{
  e.preventDefault();
   alert("submited");
 }
  render() {
    return (
      <div>
        <form  onSubmit={this.onSubmitHandler}>
          <p>Enter the Name :</p>
          <input name='userName' type={"text"} onChange={this.onChangeHandler}/>
          <input name="age" type={"text"} onChange={this.onChangeHandler}/>
          <p>display name : {this.state.userName}</p>
          <select value={"orange"}>
            <option value={"apple"}>apple</option>
            <option value={"orange"}>orange</option>
          </select>
          <input type={"checkbox"} />se
          <input type={"submit"}/>

        </form>
      </div>
    )
  }
}

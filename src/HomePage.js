import React from 'react'
import Login from './Login';
import Logout from './Logout';

export default class HomePage extends React.Component {
 constructor (props){
    super(props);
    this.state = {Logged:false}
    this.functionLogin = this.functionLogin.bind(this);
    this.functionLogout = this.functionLogout.bind(this);
 }

//  functionLogin(){
//     this.setState(()=>{
//         this.Logged=true}
//     )
//  }

 functionLogin(){
    this.setState(
       { Logged:true}
    )
 }
 functionLogout(){
    this.setState(
        {Logged:false}
    )
 }
  render() {
    
    const logged =this.state.Logged;
   return(
       <div>
        {logged && <Logout onClick={this.functionLogout}/>}
  
      {!logged && <Login onClick={this.functionLogin}/>}
       </div>

    ) 
  
  }
}
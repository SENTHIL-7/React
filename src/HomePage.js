import React from 'react'
import Login from './Login';
import Logout from './Logout';

export default class HomePage extends React.Component {
 constructor (props){
    super(props);
    this.state = {Logged:false}
 }
  render() {
    
    const logged =this.state.Logged;
    if(logged){
        return <Login/>
    }
    else{
        return <Logout/>
    }
  }
}

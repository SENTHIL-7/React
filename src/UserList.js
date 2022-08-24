import React, { Component } from 'react'
import axios from 'axios'
import { connect, Connect } from 'react-redux';
import { updateUserList } from './action';

 class UserList extends Component {
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            const users =res.data;
            console.log("......",res)
            this.props.updateUserList(users);
        })
    }
  render() {
    return (
     <ul>
         {this.props.users.map(user =>
        <li>{user.name}</li>)}
     </ul>
    )
  }
}

function mapStateToProps(state){
    return{
        users:state.users
    }
}
const mapDispatchToProps={
    updateUserList
}

export default connect(mapStateToProps,map)(UserList)

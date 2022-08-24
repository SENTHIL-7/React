import React, { Component } from 'react'
import axios from 'axios'
import { connect} from 'react-redux';
import { updateUserList } from './action';
// import StoreRedux from './StoreRedux';
// import StoreRedux from './StoreRedux';


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
        {/* <li>hi</li> */}
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

export default connect(mapStateToProps,mapDispatchToProps)(UserList)

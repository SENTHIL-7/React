import React from 'react'
import { createStore } from 'redux'
import UserList from './UserList'
import { UPDATE_USER_LIST } from './action'
import { Provider } from 'react-redux'


const initialState = {
    users :[]
}
function reducer(state=initialState,action){

    switch(action.type){
        case UPDATE_USER_LIST:
            return {
                ...state,users :action.users
            }

        default :return state
    }
}

const store = createStore(reducer)

const StoreRedux = () =>{
  return (
    <Provider store={store}>
        <UserList/>
    </Provider>
  )
}
export default StoreRedux;


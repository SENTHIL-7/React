import React from 'react'
import { createStore } from 'redux'
import UserList from './UserList'
import { updateUserList, UPDATE_USER_LIST } from './action'
import { Provider } from 'react-redux'


const initialState = {
    user :[]
}
function reducer(state=initialState,action){

    switch(action.type){
        case UPDATE_USER_LIST:
            return {
                users :action.users
            }

        default :return users
    }
}

const store = createStore(reducer,)

function StoreRedux() {
  return (
    <Provider store={ }>
        <UserList/>
    </Provider>
  )
}


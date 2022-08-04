import React from 'react'

export default function Login(props) {
  return (
    <div>
        <h1>Please login to continue</h1>
        <button onClick={props.onClick}>Login</button>
    </div>
  )
}

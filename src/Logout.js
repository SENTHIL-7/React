import React from 'react'

export default function Logout(props) {
  return (
    <div>
        <h1>Welcome you are logged</h1>
    <button onClick={props.onClick}>Logout</button>
    </div>
  )
}

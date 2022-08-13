import useCountStatus from "./useCountStatus";

import React from 'react'

export default function StatusCounter(props) {
      

    const value =useCountStatus(props.number);

  return (
    <div >
        <p style={{color:value==='even'?'green':'red'}}>
        {value}
        </p>
    </div>
  )
}

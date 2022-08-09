import React, { useEffect, useState } from 'react'

export default function Counder() {
   
  useEffect(
    ()=>{
      document.title=`count ${count}`
    }
  )

    const[count,setCound]=useState(0);
  return (
    <div>
         <p>the cound is : {count}</p>
         <button onClick={()=>setCound(count+1)}>Click</button>
    </div>
  )
}

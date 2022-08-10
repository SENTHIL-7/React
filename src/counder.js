import React, { useEffect, useState } from 'react'

export default function Counder() {
   
  if(count<5){          //don't do this is not execute useeffect
    useEffect(()=>{
      setTimeout(()=>{setCount(count+1)},1000)
    }
    )
  }

    const[count,setCount] =useState(0);
 
  return (
    <div>
         <p>the time is {count}</p>
        
    </div>
  )
}

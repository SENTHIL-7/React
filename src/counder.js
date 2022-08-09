import React, { useEffect, useState } from 'react'

export default function Counder() {
   
  useEffect(()=>{
    setTime(new Date())
  })

    const[time,setTime] =useState(new Date());
 
  return (
    <div>
         <p>the time is {time.toLocaleTimeString()}</p>
    </div>
  )
}

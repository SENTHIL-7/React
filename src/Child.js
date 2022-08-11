import React, { useState } from 'react'


// child
export default function Child({getcolor}) {

    const[achiveColor,setAchiveColor] = useState(null);

   
   const handleColor =(e)=>{
    const {value} =e.target;
        setAchiveColor(value);
        getcolor(value);
    }
  return (
    <div>
        <input type={'text'} onChange={handleColor} value={achiveColor} placeholder='input'/>
    </div>
  )
}

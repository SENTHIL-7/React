import React, { useState } from 'react'
import  './Parent.css';

import Child from './Child';

// parent 
export default function Parent() {
const[bgcolor,setBgcolor] = useState(null);
 
const getColor = (color)=>{
    setBgcolor(color);
}
  return (
    <div className='out-box'>
        <div className='box' style={{background:`${bgcolor}`}}></div>
       <Child getColor={getColor}/>
    </div>
  )
}

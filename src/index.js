import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShowTime from './ShowTime';
import reportWebVitals from './reportWebVitals';
import ToogleButton from './ToogleButton';

function showTime(){
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
<ToogleButton/>
 
);

}
setInterval(showTime)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

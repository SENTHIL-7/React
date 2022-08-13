// ============================= custom hook ==========================================
import{ useState, useEffect }  from 'react';

function useCountStatus(number){

    const [value,setValue] =useState(null);
    
    useEffect(
        ()=>{
            function handleStatus(status){
                setValue(status);
            }
           (number%2 === 0)? handleStatus("even"):handleStatus("odd"); 
        });

 
    return(value)}
export default useCountStatus;
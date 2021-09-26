import {useState} from 'react';

const HookArray = () => {

    const [array,setArray]=useState([]);

    const clickHandler=()=>{

        setArray([...array,{id:array.length,number:Math.floor(Math.random()*10)},]);
    };

    return ( 
        <div>
        <button onClick={clickHandler}>Click here</button>
        {array.map((array)=>{
            return <li >{array.id} {array.number}</li>;

        })}
        </div>
     );
};
 
export default HookArray;

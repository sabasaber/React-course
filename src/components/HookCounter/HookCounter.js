import react from "react";
import { useState } from "react/cjs/react.development";


const HookCounter = () => {

    const [count,setCount]=useState(0)

    const addOneHandler=()=>{

        setCount((PrevState)=>count+5);
    }

    return ( 
        <div>
            <h2>count-{count}</h2>
            <button onClick={addOneHandler}>add one</button>
        </div>
     );
}
 export default HookCounter;
 

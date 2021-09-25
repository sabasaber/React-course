import react from "react";
// import { useState } from "react/cjs/react.development";



class HookCounter extends react.Component{

    
state={count:0}


 addOneHandler=()=>{

     this.setState({
         count:this.state.count+1
        })
        
        
}

    render(){
        return ( 
                    <div>
                        <h2>count-{this.state.count}</h2>
                        <button onClick={this.addOneHandler}>add one</button>
                    </div>
                 );
    }
    
}

export default HookCounter;







// const Hookcounter = () => {

//     const [count,setCount]=useState(0)

//     const addOneHandler=()=>{

//         setCount(count+1);
//     }

//     return ( 
//         <div>
//             <h2>count-{count}</h2>
//             <button onClick={addOneHandler}>add one</button>
//         </div>
//      );
// }
 

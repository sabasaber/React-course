import {useState} from 'react';

const HookObject = () => {

    const [user,setUser]=useState({firstName:"",lastName:""});


    const firstNameHandler=(e)=>{
        setUser({...user,firstName: e.target.value});
    }

    const lastNameHandler=(e)=>{
        setUser({...user,lastName: e.target.value});

    }


    return ( 
        <div>
            <form>
                <input type="text" value={user.firstName} onChange={firstNameHandler}/>
                <input type="text" value={user.lastName} onChange={lastNameHandler}/>
            </form>
            <h1>My name is {user.firstName}</h1>
            <h1>My family name is {user.lastName}</h1>
        </div>
     );
}
 
export default HookObject;


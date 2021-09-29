import React from 'react';
import ProductList from './components/Product/ProductList';

import './app.css'
class App extends React.Component{

    state = {
        count:0,
    }

   
    countHandler=(id)=>{
        
       console.log(id); 
    }

    render(){
        return (
            <div className="container">
              <h1 style={{ color: 'orange' }}>Shopping App</h1>
              <ProductList/>
              <button onClick={()=>this.countHandler(2)} className="product">Click here</button>
            </div>

        );
    }
}
export default App;
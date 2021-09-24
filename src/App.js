import React from 'react';
import Product from './components/Product/Product';

class App extends React.Component{

    state = {
        Products:[
            {num:"1", title:"React" , price:"100$"},
            {num:"2", title:"Java Script" , price:"90$"},
        ],
    }

    render(){
        return (
            <div>
              <h1 style={{ color: 'orange' }}>Shopping App</h1>
              {this.state.Products.map((product)=>{
                  return <Product num={product.num} name={product.title} price={product.price} />;
                })}
            </div>
            
        );
    }
}

export default App;

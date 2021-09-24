import React from 'react';
import Product from './components/Product/Product';

class App extends React.Component{
    render(){
        return (
            <div>
              <h1 style={{ color: 'orange' }}>Shopping App</h1>
              <Product num="1" name="React Course" price="99$"/>
              <Product num="2" name="Node.js Course" price="120$">
                  <p>15% Discount</p>
                  </Product>
            </div>
            
        );
    }
}

export default App;

import React from 'react';
import ProductList from './components/Product/ProductList';

import './app.css'
class App extends React.Component{
    
    render(){
        return (
            <div className="container">
              <h1 style={{ color: '#424874' }}>Shopping App</h1>
              <ProductList/>
            </div>

        );
    }
}
export default App;
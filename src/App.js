import React from 'react';
import ProductList from './components/Product/ProductList';
import styles from './app.css'
import './app.css'
import NavBar from './components/NavBar/NavBar';
import Product from './components/Product/Product';
class App extends React.Component{
    
    state={
        Products:[
                  {num:"1", title:"React.js course" , price:"100$", key:"1", quantity:"4"},
                  {num:"2", title:"Java Script course" , price:"90$", key:"2", quantity:"2"},
                  {num:"3", title:"Node.Js course" , price:"250$", key:"3", quantity:"8"},
                  ],
    }

    deleteHandler=(id)=>{

        const filteredState = this.state.Products.filter((p)=>p.key!==id);
        this.setState({Products:filteredState});
    };

    incrementHandler=(id)=>{
        const foundedState = this.state.Products.find((p)=>p.key===id);
        this.setState({...foundedState.quantity++});
    };

    decrementHandler=(id)=>{
        const foundedState = this.state.Products.find((p)=>p.key===id);
        this.setState({...foundedState.quantity--});
        if(foundedState.quantity===0){
            const filteredState = this.state.Products.filter((p)=>p.key!==id);
        this.setState({Products:filteredState});
        }
    };

    render(){
        return (
            <div className="container">
              <NavBar totalProducts={this.state.Products.filter((p) => p.quantity>0).length}/>
              <ProductList 
              products={this.state.Products}
              onDelete={this.deleteHandler}
              onIncrement={this.incrementHandler}
              onDecrement={this.decrementHandler}/>
            </div>

        );
    }
}
export default App;
import React,{useState} from 'react';
import Product from './components/Product/Product';

// class App extends React.Component{

//     state = {
//         Products:[
//             {num:"1", title:"React" , price:"100$"},
//             {num:"2", title:"Java Script" , price:"90$"},
//         ],
//     }

//     clickHandler=()=>{
//         this.setState({
//             Products:[
//                 {num:"1", title:"React" , price:"100$"},
//                 {num:"2", title:"Java Script" , price:"10$"},
//             ],
//         });
//     }

//     render(){
//         return (
//             <div>
//               <h1 style={{ color: 'orange' }}>Shopping App</h1>
//               {this.state.Products.map((product)=>{
//          return <Product num={product.num} name={product.title} price={product.price} />;
//                 })}
//                 <button onClick={this.clickHandler}>Click here</button>
//             </div>
            
//         );
//     }
// }

// export default App;

const App = () => {
    const [products,setProducts]=useState(
        [
          {num:"1", title:"React" , price:"100$"},
          {num:"2", title:"Java Script" , price:"90$"},
        ],
    );

       const clickHandler=()=>{
                setProducts(
                    [
                        {num:"1", title:"React" , price:"100$"},
                        {num:"2", title:"Java Script" , price:"10$"},
                    ],
                );
            }

    return (<div>
                <h1 style={{ color: 'orange' }}>Shopping App</h1>
               {products.map((product)=>{
                return <Product num={product.num} name={product.title} price={product.price} />;
                })}
                <button onClick={clickHandler}>Click here</button>
            </div> );
}
 
export default App;
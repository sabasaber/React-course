import Product from "./Product";
import App from "../../App";
import React from 'react';


class ProductList extends React.Component {

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

    renderProduct =()=>{
       return this.state.Products.map((product)=>{
            return <Product 
            product={product} 
            key={product.key} 
            delete={()=>this.deleteHandler(product.key)} 
            increment={()=>this.incrementHandler(product.key)}
            decrement={()=>this.decrementHandler(product.key)}
            />;
     })
    }

    render() {
        
        return <div>
            {this.state.Products.length===0 ? <div>There is no product in the list</div> : <div>welcome</div>} 
            {this.renderProduct()}
            </div>
    }
}
 
export default ProductList;









// const ProductList = () => {

//     const [productList,setProductList]= useState({
//         Products:[
//         {num:"1", title:"React" , price:"100$", key:"1"},
//         {num:"2", title:"Java Script" , price:"90$", key:"2"},
//         {num:"1", title:"NodeJs" , price:"250$", key:"3"},
//         ],
//     });

//     return (
//         <>
//         {productList.Products.map((product)=>{
//                   return <Product num={product.num} name={product.title} price={product.price} key={product.key} click={()=>App.countHandler('product was clicked')}/>;
//                 })}
//         </>
//       );
// }
 
// export default ProductList;
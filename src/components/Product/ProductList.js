import Product from "./Product";
import App from "../../App";
import React from 'react';


class ProductList extends React.Component {

    state={
        Products:[
                  {num:"1", title:"React.js course" , price:"100$", key:"1"},
                  {num:"2", title:"Java Script course" , price:"90$", key:"2"},
                  {num:"3", title:"Node.Js course" , price:"250$", key:"3"},
                  ],
    }

    deleteHandler=(id)=>{

        const filteredstate = this.state.Products.filter((p)=>p.key!==id);
        this.setState({Products:filteredstate});
    };

    render() { 
        return <div>
            {this.state.Products.map((product)=>{
                   return <Product num={product.num} name={product.title} price={product.price} key={product.key} delete={()=>this.deleteHandler(product.key)} />;
            })}
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
import Product from "./Product";
import React from 'react';


class ProductList extends React.Component {

   

    renderProduct =()=>{

        const {products,onDelete,onIncrement,onDecrement}= this.props;
       return products.map((product)=>{
            return <Product 
                      product={product} 
                      key={product.key} 
                      remove={()=>onDelete(product.key)} 
                      increment={()=>onIncrement(product.key)}
                      decrement={()=>onDecrement(product.key)}
                  />;
     }
     )
    }

    render() {
        const {products}=this.props;
        return <div>
            {products.length===0 && <div>There is no product in the list</div> } 
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
const Product = (props) => {
    return ( 
            <><p>Product {props.num}: {props.name}</p><p>Price: {props.price}</p>
            <h6 style={{color:"red"}}>{props.children}</h6><hr/>
            </>
     );
};
 
export default Product;
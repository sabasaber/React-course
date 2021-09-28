import styles from './product.module.css';

const Product = (props) => {
    return ( 
            <>
              <div className={styles.product}>
                <p>Product {props.num}: {props.name}</p>
                <p>Price: {props.price}</p>
                <h6 style={{color:"red"}}>{props.children}</h6>
              </div>
            </>
     );
};
 
export default Product;
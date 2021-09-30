import styles from './product.module.css';

const Product = (props) => {
    return ( 
            
              <div className={styles.product} onClick={props.click}>
                <p>Product {props.num}: {props.name}</p>
                <p>Price: {props.price}</p>
                <button className={styles.button} onClick={props.delete}>Delete</button>

              </div>

            
     );
};
 
export default Product;
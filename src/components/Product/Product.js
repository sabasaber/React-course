import styles from './product.module.css';

const Product = (props) => {
    return ( 
            
              <div className={styles.product} onClick={props.click}>
                <p>Product {props.product.num}: {props.product.title}</p>
                <p>Price: {props.product.price}</p>
                <span className={styles.value}>{props.product.quantity}</span>
                <button className={`${styles.button} ${styles.inc}`} onClick={props.increment}>+</button>
                <button className={styles.button} onClick={props.decrement}>-</button>
                <button className={styles.button} onClick={props.delete}>Delete</button>

              </div>

            
     );
};
 
export default Product;
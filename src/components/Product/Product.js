import styles from './product.module.css';
import { BiTrash } from "react-icons/bi";

const Product = ({product,increment,decrement,remove}) => {
    return ( 

      
            
              <div className={styles.product} >
                
                <p>Product {product.key}: {product.title}</p>

                <p>Price: {product.price}</p>

                <span className={styles.value}>
                  {product.quantity}
                  </span>

                <button className={`${styles.button} ${styles.inc}`} onClick={increment}>
                  +
                  </button>

                <button className={ `${styles.button} ${product.quantity===1 && styles.remove}`} onClick={decrement} >
                 
                  {product.quantity>1 ? "-" : <BiTrash size={16}/>}
                  
                  </button>

                <button className={styles.button} onClick={remove}>Delete</button>

              </div>

            
     );
};
 
export default Product;

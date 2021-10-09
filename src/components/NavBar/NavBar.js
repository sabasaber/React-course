import styles from './navBar.module.css';
import { BiBasket } from "react-icons/bi";

const NavBar = ( {totalProducts} )=> {
    return ( 
        <header className={styles.navBar}>
            <h2>Shopping Website</h2>
            <span><BiBasket/>{totalProducts}</span>
        </header>
     );
}
 
export default NavBar;

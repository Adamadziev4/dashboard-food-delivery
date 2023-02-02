import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarMenu}>
        {/* <span className="fas fa-search"></span>
        <a href="#">Search</a> */}
      </div>
      <div className={styles.sidebarMenu}>
        <span className="fas fa-home"></span>
        <Link to="/">Home</Link>
      </div>
      <div className={styles.sidebarMenu}>
        <span className="fas fa-shopping-cart"></span>
        <Link to="/order">Order</Link>
      </div>
    </div>
  );
};

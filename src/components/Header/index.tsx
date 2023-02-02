import React from "react";
import { Cart } from "../Cart";

import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const [isCartActive, setIsCartActive] = React.useState<boolean>(false);

  return (
    <>
      {/* <input
        type="checkbox"
        id="cart"
      /> */}

      <label
        htmlFor="cart"
        onClick={() => setIsCartActive && setIsCartActive(!isCartActive)}
        className={`${styles.labelCart} ${isCartActive ? styles.active : null}`}
      >
        <span className={`${styles.cartIcon} fas fa-shopping-cart`}></span>
      </label>

      <h3 className={styles.logo}>Food Delivery Services</h3>
      {isCartActive && <Cart />}
    </>
  );
};

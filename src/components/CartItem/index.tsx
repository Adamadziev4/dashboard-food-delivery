import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decItemById,
  deleteItemById,
  incItemById,
  // setCountById,
} from "../../redux/slice/cartItems";
import { AppDispatch, RootState } from "../../redux/store";

import styles from "./CartItem.module.css";

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  count: number;
};

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  imgUrl,
  count,
}) => {
  const { cartItems } = useSelector((state: RootState) => state.cartItems);
  const dispatch = useDispatch<AppDispatch>();

  const findItem = cartItems.find((item) => item.id === id);

  // const setCartItemCount = (e: string) => {
  //   if (!isNaN(Number(e))) {
  //     dispatch(setCountById({ id, count: Number(e) }));
  //   }
  // };

  return (
    <div className={styles.orderCard}>
      <img className={styles.orderImage} src={imgUrl} alt="cart-img" />
      <div className={styles.orderDetail}>
        {/* <strong className={styles.itemName}>{name}</strong> */}
        <p className={styles.itemName}>{name}</p>
        <div className={styles.options}>
          <div className={styles.btns}>
            <button
              className={findItem?.count === 1 ? styles.disabled : ""}
              disabled={findItem?.count === 1}
              onClick={() => dispatch(decItemById(id))}
            >
              -
            </button>
            <span>{count}</span>
            <button onClick={() => dispatch(incItemById(id))}>+</button>
          </div>
          <strong onClick={() => dispatch(deleteItemById(id))}>×</strong>
        </div>
        {/* <input
          type="text"
          value={count}
          onChange={(e) => setCartItemCount(e.target.value)}
        /> */}
      </div>
      <span className={styles.orderPrice}>{`${price}`}₽</span>
    </div>
  );
};

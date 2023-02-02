import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { CartItem } from "../CartItem";

import styles from "./Cart.module.css";

export const Cart: React.FC = () => {
  const { cartItems, totalPrice } = useSelector(
    (state: RootState) => state.cartItems
  );

  const deliveryPrice = 100;
  const discount = totalPrice * 0.1;

  return (
    <div className={styles.dashboardOrder}>
      <h3>Корзина</h3>
      <div className={styles.orderWrapper}>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <hr className={styles.divider} />
      <div className={styles.orderTotal}>
        <p>
          Блюда <span>{totalPrice} ₽</span>
        </p>
        <p>
          Скидка 10% <span>{discount} ₽</span>
        </p>
        <p>
          Доствка <span>{cartItems.length ? deliveryPrice : 0} ₽</span>
        </p>

        <div className={styles.orderPromo}>
          <input
            className={styles.inputPromo}
            type="text"
            placeholder="Введите промокод"
          />
          <button className={styles.buttonPromo}>Найти промо</button>
        </div>
        <hr className={styles.divider} />
        <p className={styles.totalPrice}>
          Итого{" "}
          <span>
            {totalPrice ? totalPrice + deliveryPrice - discount : 0} ₽
          </span>
        </p>
      </div>
      <button className={styles.checkout}>Оформить заказ</button>
    </div>
  );
};

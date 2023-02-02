import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { OrderItem } from "../../components/OrderItem";

import styles from "./Order.module.css";
import { Sidebar } from "../../components/Sidebar";
import { Link } from "react-router-dom";

export const Order: React.FC = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartItems);

  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.order}>
        <div
          className={`${styles.orderGrid} ${
            !cartItems.length ? styles.empty : null
          }`}
        >
          {!cartItems.length ? (
            <div className={styles.emptyOrder}>
              <h2>Вы ничего не добавили в корзину(</h2>
              <Link to="/">
                <button>Выбрать блюда</button>
              </Link>
            </div>
          ) : (
            <>
              <Form />
              <div>
                <h3>Состав заказа</h3>
                <ul>
                  {cartItems.map((cartItem) => (
                    <li className={styles.orderItem}>
                      <OrderItem key={cartItem.id} {...cartItem} />
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

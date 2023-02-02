import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decItemById, incItemById } from "../../redux/slice/cartItems";
import { AppDispatch, RootState } from "../../redux/store";

import { IDish } from "../../types";

import styles from "./DishCard.module.css";

export const DishCard: React.FC<IDish> = ({
  id,
  name,
  price,
  description,
  cookingTime,
  imgUrl,
}) => {
  const { cartItems } = useSelector((state: RootState) => state.cartItems);
  const dispatch = useDispatch<AppDispatch>();

  const findItem = cartItems.find((item) => item.id === id);

  const onClickAddCart = () => {
    dispatch(addItem({ id, name, price, imgUrl, count: 1 }));
  };

  return (
    <div className={styles.dashboardCard}>
      <img className={styles.cardImage} src={imgUrl} alt="dashboard-card" />
      <div className={styles.cardDetail}>
        <div className={styles.namePrice}>
          <h4>{name}</h4>
          <span>{price} ₽</span>
        </div>
        <p>{description}</p>
      </div>
      <div className={styles.cardTime}>
        <span className="fas fa-clock"> {cookingTime}</span>
        <div>
          {!findItem ? (
            <button className={styles.addBtn} onClick={onClickAddCart}>
              Добавить в корзину
            </button>
          ) : (
            <div className={styles.cardBtns}>
              <button onClick={() => dispatch(decItemById(id))}>-</button>
              <strong>{findItem.count}</strong>
              <button onClick={() => dispatch(incItemById(id))}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

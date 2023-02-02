import React from "react";

import styles from "./OrderItem.module.css";

type OrderItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  count: number;
};

export const OrderItem: React.FC<OrderItemProps> = ({
  id,
  name,
  price,
  imgUrl,
  count,
}) => {
  return (
    <div className={styles.orderItem}>
      <div className={styles.imgUrlName}>
        <div>
          <img src={imgUrl} alt="order-item" width="70px" height="75px" />
        </div>
        <p>{name}</p>
      </div>
      <div className={styles.countPrice}>
        <p>{count}</p>
        <p>{price}р</p>
      </div>
    </div>
  );
};

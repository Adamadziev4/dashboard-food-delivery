import React from "react";

import { categoryList } from "../../data";

import styles from "./Categories.module.css";

type CategoriesProps = {
  categoryId: number;
  setCategoryId: React.Dispatch<React.SetStateAction<number>>;
};

export const Categories: React.FC<CategoriesProps> = ({
  categoryId,
  setCategoryId,
}) => {
  return (
    <div className={styles.dashboardMenu}>
      {categoryList.map((category) => (
        <span
          className={categoryId === category.id ? styles.active : null}
          onClick={() => setCategoryId(category.id)}
          key={category.name}
        >
          {category.name}
        </span>
      ))}
    </div>
  );
};

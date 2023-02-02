import React from "react";

import { Categories } from "../../components/Categories";
import { DishCard } from "../../components/DishCard";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

import { dishes } from "../../data";

import styles from "./Dashboard.module.css";

export const Dashboard: React.FC = () => {
  const [categoryId, setCategoryId] = React.useState<number>(1);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (searchValue.length === 0) {
      setCategoryId(1);
    } else {
      setCategoryId(0);
    }
  }, [searchValue]);

  React.useEffect(() => {
    if (isMounted) {
      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
    } else setIsMounted(true);
  }, [categoryId]);

  const filterDishes = dishes.filter(
    (dish) =>
      dish.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      dish.category.includes(categoryId)
  );

  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.dashboard}>
        <div className={styles.dashboardBanner}>
          <img src="/images/banner.webp" alt="banner" />
          <div className={styles.bannerPromo}>
            <h1>
              <span>50 OFF</span>
              <br />
              Tasty Food <br />
              On Your Hand
            </h1>
          </div>
        </div>
        <h3 className={styles.dashboardTitle}>Рекоманедованно для Вас</h3>
        <div className={styles.dashboardFilter}>
          <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Поиск блюд.."
          />
        </div>
        <div className={styles.dashboardContent}>
          {filterDishes.map((item) => (
            <DishCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

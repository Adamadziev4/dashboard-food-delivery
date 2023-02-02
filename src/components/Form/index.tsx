import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

import styles from "./Form.module.css";

export const Form: React.FC = () => {
  const { cartItems } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const [isCashPay, setIsCashPay] = React.useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onClickCashPay = () => {
    setIsCashPay(true);
  };

  const onClickOnlinePay = () => {
    setIsCashPay(false);
  };

  const onClickSubmit = () => {};

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <h3 className={styles.formTitle}>Введите свои данные</h3>
        <section className={styles.namePhone}>
          <div>
            <p>
              Name{" "}
              <strong className={errors.name ? styles.error : null}>*</strong>
            </p>
            <input
              {...register("name", {
                required: true,
                //   value: user.isSucsess ? user.personalData?.name : "",
              })}
              className={errors.name ? styles.error : ""}
            />
          </div>
          <div>
            <p>
              Phone{" "}
              <strong className={errors.phone ? styles.error : null}>*</strong>
              <span className={styles.error}>
                {errors.phone?.type === "pattern" &&
                  "Некорректный номер телефона"}
              </span>
            </p>
            <input
              {...register("phone", {
                required: true,
                //   value: user.isSucsess ? user.personalData?.phone : "",
                pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
              })}
              className={
                errors.phone?.type === "required" ? styles.error : null
              }
            />
            {/* <div className={styles.error}>
              {errors.phone?.type === "pattern" && "Некорректный номер телефона"}
            </div> */}
          </div>
        </section>
        <section className={styles.delivery}>
          {/* <h4 className={styles.deliveryText}>Delivery</h4> */}
          <div className={styles.city}>
            <p>
              City{" "}
              <strong className={errors.city ? styles.error : null}>*</strong>
            </p>
            <input
              {...register("city", {
                required: true,
                //   value: user.isSucsess ? user.personalData?.city : "",
              })}
              className={errors.city ? styles.error : null}
            />
          </div>
          <div className={styles.street}>
            <p>
              Street{" "}
              <strong className={errors.street ? styles.error : null}>*</strong>
            </p>
            <input
              {...register("street", {
                required: true,
                //   value: user.isSucsess ? user.personalData?.street : "",
              })}
              className={errors.street ? styles.error : null}
            />
          </div>
          <div className={styles.houseFlat}>
            <div className={styles.house}>
              <p>
                House{" "}
                <strong className={errors.house ? styles.error : null}>
                  *
                </strong>
              </p>
              <input
                {...register("house", {
                  required: true,
                  // value: user.isSucsess ? user.personalData?.house : "",
                  pattern: /[0-9]/,
                })}
                className={errors.house ? styles.error : null}
              />
            </div>
            <div className={styles.flat}>
              <p>Flat</p>
              <input
                {...register("flat", {
                  // value: user.isSucsess ? user.personalData?.flat : "",
                  pattern: /[0-9]/,
                })}
                className={errors.flat ? styles.error : null}
              />
            </div>
          </div>
        </section>
        <section className={styles.comment}>
          {/* <h4>Количество персон</h4> */}
          <span>Комментарий к заказу:</span>
          <br />
          <textarea
            {...register("comment", {
              // value: user.isSucsess ? user.personalData?.comment : "",
            })}
          />
        </section>
        <section className={styles.pay}>
          <h4 className={styles.payTitle}>Pay method</h4>
          <div className={styles.cash}>
            <label htmlFor="cash" onClick={onClickCashPay}>
              <input
                {...register("cashPay", {})}
                checked={isCashPay}
                type="radio"
                id="cash"
                name="pay"
              />
              Cash
            </label>
          </div>
          <div className={styles.online}>
            <label htmlFor="online" onClick={onClickOnlinePay}>
              <input
                {...register("onlinePay", {})}
                checked={!isCashPay}
                type="radio"
                id="online"
                name="pay"
              />
              Online
            </label>
          </div>
        </section>
        <section className={styles.total}>
          <span>Total payable: {cartItems.totalPrice}$</span>
          <button>Pay</button>
        </section>
      </form>
    </>
  );
};

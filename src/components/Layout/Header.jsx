import React from "react";

import styles from "./Header.module.css";
import { BiBowlHot } from "react-icons/bi";

import image from "../../assets/food2.jpg";
import HeaderButton from "./HeaderCartButton";
import { Fragment } from "react";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>
          YourMeal
          <BiBowlHot />
        </h1>
        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};
export default Header;

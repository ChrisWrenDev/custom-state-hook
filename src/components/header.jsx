import React from "react";
import Basket from "./basket";
import classes from "./header.module.css";
///>>> REDUX TOOLKIT <<<///
// import { useSelector } from "react-redux";

///>>> CUSTOM HOOK <<<///
import { useStore } from "../custom-hook/store";

function Header() {
  ///>>> REDUX TOOLKIT <<<///
  //const totalAmount = useSelector((state) => state.cart.totalAmount);

  ///>>> CUSTOM HOOK <<<///
  const state = useStore()[0];
  const totalAmount = state.totalAmount;

  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>{`£${totalAmount.toFixed(2)}`}</div>
        <Basket />
      </div>
    </div>
  );
}

export default Header;

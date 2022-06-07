import React from "react";
import classes from "./basket.module.css";
///>>> REDUX TOOLKIT <<<///
// import { useSelector } from "react-redux";

///>>> CUSTOM HOOK <<<///
import { useStore } from "../custom-hook/store";

function Basket() {
  ///>>> REDUX TOOLKIT <<<///
  // const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  ///>>> CUSTOM HOOK <<<///
  const state = useStore()[0];
  const totalQuantity = state.totalQuantity;

  return <div className={classes.basket}>{totalQuantity}</div>;
}

export default Basket;

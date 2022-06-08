import classes from "./basket.module.css";

///>>> CONTEXT API <<<///
import React, { useContext } from "react";
import { ProductsContext } from "../context/products-context";

///>>> REDUX TOOLKIT <<<///
// import React from "react";
// import { useSelector } from "react-redux";

///>>> CUSTOM HOOK <<<///
// import React from "react";
// import { useStore } from "../custom-hook/store";

function Basket() {
  ///>>> CONTEXT API <<<///
  const totalQuantity = useContext(ProductsContext).totalQuantity;

  ///>>> REDUX TOOLKIT <<<///
  // const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  ///>>> CUSTOM HOOK <<<///
  // const state = useStore()[0];
  // const totalQuantity = state.totalQuantity;

  return <div className={classes.basket}>{totalQuantity}</div>;
}

export default Basket;

import Basket from "./basket";
import classes from "./header.module.css";

//>>> CONTEXT API <<<//
import React, { useContext } from "react";
import { ProductsContext } from "../context/products-context";

///>>> REDUX TOOLKIT <<<///
// import React from "react";
// import { useSelector } from "react-redux";

///>>> CUSTOM HOOK <<<///
// import React from "react";
// import { useStore } from "../custom-hook/store";

function Header() {
  //>>> CONTEXT API <<<//
  const totalAmount = useContext(ProductsContext).totalAmount;

  ///>>> REDUX TOOLKIT <<<///
  //const totalAmount = useSelector((state) => state.cart.totalAmount);

  ///>>> CUSTOM HOOK <<<///
  // const state = useStore()[0];
  // const totalAmount = state.totalAmount;

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

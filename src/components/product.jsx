import React from "react";
import classes from "./product.module.css";

function Product({ name, stockCode }) {
  return (
    <div className={classes.product}>
      <div className={classes.product__image}></div>
      <div className={classes.product__details}>
        <h2 className={classes.product__name}>{`Name: ${name}`}</h2>
        <p
          className={classes["product__stock-code"]}
        >{`stock code: ${stockCode}`}</p>
        <div className={classes.product__btns}>
          <button className={`${classes.btn} ${classes["btn--add"]}`}>
            Add
          </button>
          <button className={`${classes.btn} ${classes["btn--remove"]}`}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

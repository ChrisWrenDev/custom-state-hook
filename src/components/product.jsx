import classes from "./product.module.css";

///>>> CONTEXT API <<<///
import React, { useContext } from "react";
import { ProductsContext } from "../context/products-context";

///>>> REDUX TOOLKIT <<<///
// import React from "react";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../store/cart-slice";

///>>> CUSTOM HOOK <<<///
// import React from "react";
// import { useStore } from "../custom-hook/store";

const Product = React.memo((props) => {
  console.log("RENDERING");

  const { id, title, price, stockCode, basketItem } = props;

  ///>>> CONTEXT API <<<///
  const { addProduct, removeProduct } = useContext(ProductsContext);

  const addToCartHandler = () => {
    addProduct({ id, title, price });
  };
  const removeFromCartHandler = () => {
    removeProduct(id);
  };

  ///>>> REDUX TOOLKIT <<<///
  // const dispatch = useDispatch();

  // const addToCartHandler = () => {
  //   dispatch(cartActions.addItemToCart({ id, title, price }));
  // };

  // const removeFromCartHandler = () => {
  //   dispatch(cartActions.removeItemFromCart(id));
  // };

  ///>>> CUSTOM HOOK <<<///
  // const dispatch = useStore(false)[1];

  // const addToCartHandler = () => {
  //   dispatch("ADD", { id, title, price, stockCode, basketItem });
  // };

  // const removeFromCartHandler = () => {
  //   dispatch("REMOVE", id);
  // };

  return (
    <div className={classes.product}>
      <div className={classes.product__image}></div>
      <div className={classes.product__details}>
        <h2 className={classes.product__name}>{`Name: ${title}`}</h2>
        <p
          className={classes["product__stock-code"]}
        >{`stock code: ${stockCode}`}</p>
        <p className={classes["product__stock-code"]}>{`£${price.toFixed(
          2
        )}`}</p>
        <div className={classes.product__btns}>
          <button
            className={`${classes.btn} ${classes["btn--add"]}`}
            onClick={addToCartHandler}
          >
            Add
          </button>
          <button
            className={`${classes.btn} ${
              basketItem ? classes["btn--active"] : classes["btn--remove"]
            }`}
            onClick={removeFromCartHandler}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
});

export default Product;

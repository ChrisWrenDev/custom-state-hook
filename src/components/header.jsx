import React from "react";
import Basket from "./basket";
import classes from "./header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>CEF DARK</div>
        <Basket />
      </div>
    </div>
  );
}

export default Header;

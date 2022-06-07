import React from "react";
import Header from "./components/header";
import Product from "./components/product";
import classes from "./App.module.css";
///>>> REDUX TOOLKIT <<<///
// import { useSelector } from "react-redux";

///>>> CUSTOM HOOK <<<///
import { useStore } from "./custom-hook/store";

const data = [
  { id: "p1", title: "Product 1", stockCode: "001", price: 5 },
  { id: "p2", title: "Product 2", stockCode: "002", price: 2 },
  { id: "p3", title: "Product 3", stockCode: "003", price: 4 },
  { id: "p4", title: "Product 4", stockCode: "004", price: 6 },
  { id: "p5", title: "Product 5", stockCode: "005", price: 3 },
  { id: "p6", title: "Product 6", stockCode: "006", price: 5 },
];

function App() {
  const state = useStore()[0];

  ///>>> REDUX TOOLKIT <<<///
  // const basketItems = useSelector((state) => state.cart.items);

  ///>>> CUSTOM HOOK <<<///
  const basketItems = state.items;
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.wrapper}>
        <div className={classes.grid}>
          {data.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              stockCode={item.stockCode}
              price={item.price}
              basketItem={basketItems.find((product) => product.id === item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

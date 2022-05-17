import React from "react";
import Header from "./components/header";
import Product from "./components/product";
import classes from "./App.module.css";

const data = [
  { id: "p1", name: "Product 1", stockCode: "001" },
  { id: "p2", name: "Product 2", stockCode: "002" },
  { id: "p3", name: "Product 3", stockCode: "003" },
  { id: "p4", name: "Product 4", stockCode: "004" },
  { id: "p5", name: "Product 5", stockCode: "005" },
  { id: "p6", name: "Product 6", stockCode: "006" },
];

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.wrapper}>
        <div className={classes.grid}>
          {data.map((item) => (
            <Product
              key={item.id}
              name={item.name}
              stockCode={item.stockCode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

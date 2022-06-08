import React, { useState } from "react";

export const ProductsContext = React.createContext({
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  addProducts: (product) => {},
  removeProducts: (id) => {},
});

const ProductsProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addProduct = (product) => {
    setItems((itemList) => {
      const existingItem = itemList.find((item) => item.id === product.id);

      if (!existingItem) {
        return [
          ...itemList,
          {
            ...product,
            quantity: 1,
          },
        ];
      } else {
        const updatedItems = itemList.map((item) => {
          if (item.id === existingItem.id) {
            item.quantity++;
          }
          return item;
        });
        return updatedItems;
      }
    });
    setTotalQuantity((qty) => qty + 1);

    setTotalAmount((amount) => amount + product.price);
  };

  const removeProduct = (id) => {
    const currentListItem = items.find((item) => item.id === id);
    if (!currentListItem) return;

    setItems((itemList) => {
      const existingItem = itemList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        const updatedItems = itemList.filter(
          (product) => product.id !== existingItem.id
        );
        return updatedItems;
      } else {
        const updatedProductQty = itemList.map((item) => {
          if (item.id === existingItem.id) {
            item.quantity--;
          }
          return item;
        });
        return updatedProductQty;
      }
    });

    setTotalQuantity((qty) => qty - 1);

    setTotalAmount((amount) => amount - currentListItem.price);
  };

  return (
    <ProductsContext.Provider
      value={{ items, totalQuantity, totalAmount, addProduct, removeProduct }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

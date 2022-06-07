import { initStore } from "./store";

const productStore = () => {
  const initialState = { items: [], totalQuantity: 0, totalAmount: 0 };
  const actions = {
    ADD: (state, product) => {
      const existingItem = state.items.find((item) => item.id === product.id);

      if (!existingItem) {
        const updatedItems = [
          ...state.items,
          {
            ...product,
            quantity: 1,
          },
        ];

        const updatedQuantity = 1 + state.totalQuantity;
        const updatedAmount = product.price + state.totalAmount;

        return {
          items: updatedItems,
          totalQuantity: updatedQuantity,
          totalAmount: updatedAmount,
        };
      } else {
        const updatedProductQty = state.items.map((product) => {
          if (product.id === existingItem.id) {
            product.quantity++;
            product.totalQuantity += product.price;
            return product;
          } else {
            return product;
          }
        });

        const updatedBasketQty = 1 + state.totalQuantity;
        const updatedBasketAmount = product.price + state.totalAmount;

        return {
          items: updatedProductQty,
          totalQuantity: updatedBasketQty,
          totalAmount: updatedBasketAmount,
        };
      }
    },
    REMOVE: (state, id) => {
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        const updatedProductQty = state.items.filter(
          (product) => product.id !== existingItem.id
        );

        const updatedBasketQty = state.totalQuantity - 1;
        const updatedBasketAmount = state.totalAmount - existingItem.price;

        return {
          items: updatedProductQty,
          totalQuantity: updatedBasketQty,
          totalAmount: updatedBasketAmount,
        };
      } else {
        const updatedProductQty = state.items.map((product) => {
          if (product.id === existingItem.id) {
            product.quantity--;
            product.totalQuantity -= product.price;
            return product;
          } else {
            return product;
          }
        });

        let updatedBasketQty = state.totalQuantity;
        let updatedBasketAmount = state.totalAmount;

        return {
          items: updatedProductQty,
          totalQuantity: updatedBasketQty--,
          totalAmount: updatedBasketAmount - existingItem.price,
        };
      }
    },
  };

  initStore(actions, initialState);
};

export default productStore;

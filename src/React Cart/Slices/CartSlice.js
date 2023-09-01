import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalDiscount: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_PRODUCT_TO_CART: (cart, action) => {
      cart.cartItems = action?.payload?.productsWithQuantity;
    },

    REMOVE_PRODUCT_FROM_CART: (cart, action) => {
      cart.cartItems = cart.cartItems.filter(
        (item) => item.id !== action?.payload?.id
      );
    },
    INCREATE_QTY: (cart, action) => {
      cart.cartItems = cart.cartItems.map((item) => {
        if (item.id === action?.payload?.id) {
          return { ...item, quantity: (item.quantity || 0) + 1 };
        }
        return item;
      });
    },
    DECREASE_QTY: (cart, action) => {
      cart.cartItems = cart.cartItems.map((item) => {
        if (item.id === action?.payload?.id) {
          const newQuantity = (item.quantity || 0) - 1;
          return { ...item, quantity: newQuantity >= 1 ? newQuantity : 1 };
        }
        return item;
      });
    },

    CALCULATE_PRICE_DISCOUNT: (cart, action) => {
      const totalPrice = action?.payload?.cartItems.reduce(
        (total, item) => total + (item.price * item.quantity || 0),
        0
      );

      const totalDiscount = action?.payload?.cartItems.reduce(
        (total, item) => total + (item.discount * item.quantity || 0),
        0
      );
      console.log("+++++", totalDiscount, totalPrice);
      cart.totalDiscount = totalDiscount;
      cart.totalPrice = totalPrice;
    },
  },
});

export const {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREATE_QTY,
  DECREASE_QTY,
  CALCULATE_PRICE_DISCOUNT,
} = CartSlice.actions;
export default CartSlice.reducer;

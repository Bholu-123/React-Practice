import {
  ADD_PRODUCT_TO_CART,
  CALCULATE_PRICE_DISCOUNT,
  DECREASE_QTY,
  INCREATE_QTY,
  REMOVE_PRODUCT_FROM_CART,
} from "../Slices/CartSlice";

export const increaseQuantity = (id, dispatch) => {
  dispatch(
    INCREATE_QTY({
      id,
    })
  );
};

export const decreaseQuantity = (id, dispatch) => {
  dispatch(
    DECREASE_QTY({
      id,
    })
  );
};

export const addAllProductToCart = (products, dispatch) => {
  const productsWithQuantity = products.map((product) => {
    return { ...product, quantity: 1 };
  });
  dispatch(
    ADD_PRODUCT_TO_CART({
      productsWithQuantity,
    })
  );
};

export const removeProductFromCart = (id, dispatch) => {
  dispatch(
    REMOVE_PRODUCT_FROM_CART({
      id,
    })
  );
};

export const calculatePriceDiscount = (cartItems, dispatch) => {
  dispatch(
    CALCULATE_PRICE_DISCOUNT({
      cartItems,
    })
  );
};

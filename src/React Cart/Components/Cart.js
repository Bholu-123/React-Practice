import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculatePriceDiscount } from "../Actions/CartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const totalQuantity = useSelector((store) => store.cart.totalPrice);
  const totalDiscount = useSelector((store) => store.cart.totalDiscount);

  useEffect(() => {
    calculatePriceDiscount(cartItems, dispatch);
  }, [cartItems, dispatch]);

  return (
    <div className="cart">
      <div className="itemsCart">
        <div>Items({2})</div>
        <div>:</div>
        <div>{totalQuantity}</div>
      </div>
      <div className="itemsCart">
        <div>Discount</div>
        <div>:</div>
        <div>{totalDiscount}</div>
      </div>
      <div className="itemsCart">
        <div>Type Discount</div>
        <div>:</div>
        <div>$138</div>
      </div>
      <div className="orderTotal">
        <div>Order Total</div>
        <div className="orderTotalValue">$138</div>
      </div>
    </div>
  );
};

export default Cart;

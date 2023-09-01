import React, { useEffect } from "react";
import productsData from "../Data/productsData.json";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllProductToCart,
  decreaseQuantity,
  increaseQuantity,
  removeProductFromCart,
} from "../Actions/CartAction";

const Products = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);

  // amount = (item) => {
  //   var inc = 0;
  //   this.props.cart.forEach((c) => {
  //     if (c.id === item.id) {
  //       inc++;
  //     }
  //   });
  //   return inc;
  // };

  useEffect(() => {
    addAllProductToCart(productsData.productsData, dispatch);
  }, [dispatch]);

  console.log(cartItems);

  const productList = () => {
    return cartItems.map((item, index) => {
      return (
        <div className="productValue" key={index}>
          <div className="itemsValue">
            <div className="itemsdata">
              <div className="left">
                <img src={item.img_url} alt={item.name} />
                &nbsp;&nbsp;
                <span id="itemName">{item.name}</span>
              </div>
              <div className="right">
                <button
                  className="delete"
                  onClick={() => removeProductFromCart(item.id, dispatch)}
                >
                  x
                </button>
              </div>
            </div>
          </div>
          <div className="qtyValue">
            <button
              className="minus"
              onClick={() => decreaseQuantity(item.id, dispatch)}
            >
              -
            </button>
            <div className="inputQty">{item.quantity}</div>
            <button
              className="plus"
              onClick={() => increaseQuantity(item.id, dispatch)}
            >
              +
            </button>
          </div>
          <div className="priceValue">
            <span>${item.price * item.quantity}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="products">
      <div className="productsHeader">
        <div className="items">
          <span>Items({cartItems.length})</span>
        </div>
        <div className="qty">
          <span>Qty</span>
        </div>
        <div className="price">
          <span>Price</span>
        </div>
      </div>
      {productList()}
    </div>
  );
};

export default Products;

import React from "react";
import { useLocation } from "react-router-dom";

function CartCard() {
  const data = useLocation();
  const product = data.state[0];
  const user = data.state[1];
  const quantity = 1;
  console.log(product);
  console.log(user);

  const placeOrder = async () => {

  }

  return (
    <div>
      <div className="card w-25">
        <div className="card-body">
          <h5 className="card-title">Order Summary</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Card subtitle
          </h6>
          <div>
            <p className="card-text">Price</p>
            <p className="card-text">₱{USformatter.format(product.Price)}</p>
          </div>
          <div>
            <p className="card-text">Quantity</p>
            <p className="card-text">{quantity}</p> 
          </div>
          <div>
            <p className="card-text">Shipping</p>
            <p className="card-text">Free</p>
          </div>
          <hr />
          <div>
            <p className="card-text">Total</p>
            <p className="card-text">₱{USformatter.format(product.Price * quantity)}</p>
          </div>
          <button type="submit" onClick={placeOrder}></button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;

import React from "react";
import { useLocation } from "react-router-dom";

function CartCard() {
  const data = useLocation();
  const product = data.state[0];
  const user = data.state[1];
  console.log(product);
  console.log(user);

  return (
    <div>
      <div className="card w-25">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}

export default CartCard;

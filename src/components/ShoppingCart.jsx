import React, { useState } from "react";

const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 15 },
];

const Product = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
};

const CartItem = ({ item, removeFromCart }) => {
  const { product, quantity } = item;

  return (
    <div className="cart-item">
      <h4>{product.name}</h4>
      <p>Quantity: {quantity}</p>
      <p>Price: ${product.price}</p>
      <p>Total: ${product.price * quantity}</p>
      <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  );
};

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter(
      (item) => item.product.id !== product.id
    );
    setCartItems(updatedCart);
  };

  const calculateCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="product-list">
        <h2>Products</h2>
        <div className="products">
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} removeFromCart={removeFromCart} />
          ))}
        </div>
        <p>Total: ${calculateCartTotal()}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;

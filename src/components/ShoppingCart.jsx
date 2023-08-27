import React, { useState } from "react";

const laptops = [
  {
    id: 1,
    name: "Laptop A",
    price: 800,
    description: "Powerful laptop with high performance.",
    colors: ["Black", "White", "Titanium Silver"],
  },
  {
    id: 2,
    name: "Laptop B",
    price: 1200,
    description: "Sleek and lightweight laptop for professionals.",
    colors: ["Black", "White", "Titanium Silver"],
  },
  {
    id: 3,
    name: "Laptop C",
    price: 1500,
    description: "Gaming laptop with advanced graphics capabilities.",
    colors: ["Black", "White", "Titanium Silver"],
  },
];

const Laptop = ({ laptop, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(laptop.colors[0]);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="laptop">
      <h3>{laptop.name}</h3>
      <p>${laptop.price}</p>
      <p>{laptop.description}</p>
      <select value={selectedColor} onChange={handleColorChange}>
        {laptop.colors.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={() => addToCart(laptop, selectedColor, quantity)}>
        Add to Cart
      </button>
    </div>
  );
};

const CartItem = ({ item, removeFromCart }) => {
  const { laptop, color, quantity } = item;

  return (
    <div className="cart-item">
      <h4>{laptop.name}</h4>
      <p>Color: {color}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: ${laptop.price}</p>
      <p>Total: ${laptop.price * quantity}</p>
      <p>Description: {laptop.description}</p>
      <button onClick={() => removeFromCart(laptop, color)}>Remove</button>
    </div>
  );
};

const LaptopShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (laptop, color, quantity) => {
    const existingItem = cartItems.find(
      (item) => item.laptop.id === laptop.id && item.color === color
    );

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.laptop.id === laptop.id && item.color === color
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { laptop, color, quantity }]);
    }
  };

  const removeFromCart = (laptop, color) => {
    const updatedCart = cartItems.filter(
      (item) => item.laptop.id !== laptop.id || item.color !== color
    );
    setCartItems(updatedCart);
  };

  const calculateCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.laptop.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h1>Laptop Shopping Cart</h1>
      <div className="laptop-list">
        <h2>Laptops</h2>
        <div className="laptops">
          {laptops.map((laptop) => (
            <Laptop key={laptop.id} laptop={laptop} addToCart={addToCart} />
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

export default LaptopShoppingCart;

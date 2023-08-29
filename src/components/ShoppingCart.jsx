import React, { useState, useEffect } from "react";
import { Subscript } from "react-bootstrap-icons";
import styled from "styled-components";

const laptops = [
  {
    imageUrl: 'https://images.acer.com/is/image/acer/acer-aspire-3-a315-59-a315-59g-non-fingerprint-non-backlit-wallpaper-win11-pure-silver-01-2?$Visual-Filter-L$',
    productSeriesName: 'Aspire 3',
    quantity: 1,
    color: 'Silver',
    price: 5999,
  },
  {
    imageUrl: 'https://images.acer.com/is/image/acer/Aspire3-aspire1-a31535-a11532-Sg-01a-2?$Series-Component-L$',
    productSeriesName: 'Aspire 1',
    quantity: 1,
    color: 'Black',
    price: 8999,
  },
  {
    imageUrl: 'https://images.acer.com/is/image/acer/acer-aspire-3-a315-24p-non-fingerprint-non-backlit-wallpaper-silver-01?$Series-Component-L$',
    productSeriesName: 'Aspire AMD',
    quantity: 1,
    color: 'Silver',
    price: 9999,
  },
];

const LaptopShoppingCart = () => {
  const [quantities, setQuantities] = useState(laptops.map((laptop) => laptop.quantity));
  const [cart, setCart] = useState(laptops); // Use a state to manage the cart items

  const removeItem = (index) => {
    // Create a copy of the current cart, excluding the item to be removed
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  
  const calculateTotalItems = () => {
    let total = 0;
    laptops.forEach((laptop, index) => {
      total += quantities[index];
    });
    return total;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    laptops.forEach((laptop, index) => {
      totalPrice += laptop.price * quantities[index];
    });
    return totalPrice;
  };

  const incrementQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(newQuantities[index] + 1, 1);
    setQuantities(newQuantities);
  };

  const decrementQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(newQuantities[index] - 1, 1);
    setQuantities(newQuantities);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [quantities]);

  return (
    <Container className="container-fluid col-lg-8 col-md-10 col-11 p-4 pb-2 m-3 text-light">
      <Title className="d-flex">
        CART
        <span className="fs-5 ps-3 pt-2 text-secondary">{calculateTotalItems()} ITEMS</span>
      </Title>
      <hr />
      <ol className="ps-0">
        {laptops.map((info, index) => (
          <Card key={index}>
            <CardBG className="container-fluid d-flex justify-content-between p-3 bg-light text-dark d-flex mb-3">
              <div className="d-flex flex-row">
                <LaptopImg src={info.imageUrl} alt="" />
                <div className="d-flex flex-column ms-3 pt-4">
                  <h4>{info.productSeriesName}</h4>
                  <p><span className="text-secondary pe-2">Color</span> {info.color}</p>
                  <div className="d-flex w-auto">
                    <Button className="form-control" onClick={() => decrementQuantity(index)}>-</Button>
                    <Quantity type="number" value={quantities[index]} className="form-control" />
                    <Button className="form-control" onClick={() => incrementQuantity(index)}>+</Button>
                    <Remove type="button" value="REMOVE" className="btn text-danger" onClick={() => removeItem(index)}/>
                  </div>
                </div>
              </div>
              <div>
                <h4>${info.price * quantities[index]}</h4>
              </div>
            </CardBG>
          </Card>
        ))}
      </ol>
    </Container>
  );
};

export default LaptopShoppingCart;

const LaptopImg = styled.img`
  width: 15rem;
`;

const Card = styled.li`
  list-style: none;
`;

const CardBG = styled.div`
  border-radius: 15px;
`;

const Container = styled.div`
  background: #1F2937;
  border-top: 5px solid #DC2626;
  border-radius: 15px;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const Quantity = styled.input`
  width: 20% !important;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
`

const Button = styled.button`
  max-width: 2rem;
`;

const Remove =styled.input`
  box-shadow: none;

  &:hover{
    box-shadow: none !important;
  }
`
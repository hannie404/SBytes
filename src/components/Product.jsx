import React, { useState } from "react";
import styled from "styled-components";


const product = [
  {
    Quantity: 1,
    ProductSeriesName: 'Swift Go 14',
    ProductModel: 'SFG14-71-54AP',
    Stock: '5',
    Price: '48299',
    ImageUrl: 'https://images.acer.com/is/image/acer/acer-endurot1-et11031w_wp_win10_01?$Series-Component-XL$',
    Cpu: 'Intel Core i5-1335U (13th Gen)',
    Memory: '16 GB',
    IntegratedGfx: 'Intel Iris Xe Max Graphics',
    Storage: '1 x 512 GB M.2 NVMe PCIe',
    ScreenSize: '14',
    Resolution: '2240 x 1400',
    RefreshRate: '60 Hz',
    Color: 'Pure Silver',
    Battery: 'Lithium-Ion',
    OperatingSystem: 'Windows 11 Home',
    Package: 'Product, charger, Wired Mouse',    
  },
]



function Product() {
  const [quantities, setQuantities] = useState(product.map((info) => info.Quantity));
  const [value, setValue] = useState(0);

  const handleRatingChange = (newValue) => {
    setValue(newValue);
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

  return (
    <div className='d-flex'>
      {product.map((info, index) => (
        <>
          <div className="">
            <img src={info.ImageUrl} alt="" />
          </div>
          <div className="d-flex flex-column">
            <h1>{info.ProductSeriesName}</h1>
            <h4>$ {info.Price}</h4>
            <div className="description">
              <Info><b>Product Model:</b>&nbsp;{info.ProductModel}</Info>
              <Info><b>CPU:</b>&nbsp;{info.Cpu}</Info>
              <Info><b>Memory:</b>&nbsp;{info.Memory}</Info>
              <Info><b>IntegratedGfx:</b>&nbsp;{info.IntegratedGfx}</Info>
              <Info><b>Storage:</b>&nbsp;{info.Storage}</Info>
              <Info><b>ScreenSize:</b>&nbsp;{info.ScreenSize}</Info>
              <Info><b>Resolution:</b>&nbsp;{info.Resolution}</Info>
              <Info><b>RefreshRate:</b>&nbsp;{info.RefreshRate}</Info>
              <Info><b>Color:</b>&nbsp;{info.Color}</Info>
              <Info><b>Battery:</b>&nbsp;{info.Battery}</Info>
              <Info><b>OperatingSystem:</b>&nbsp;{info.OperatingSystem}</Info>
              <Info><b>Package:</b>&nbsp;{info.Package}</Info>
            </div>
            <div className="d-flex w-auto">
              <Button className="form-control" onClick={() => decrementQuantity(index)}>-</Button>
              <Quantity type="number" value={quantities[index]} className="form-control" />
              <Button className="form-control" onClick={() => incrementQuantity(index)}>+</Button>
              <Remove type="button" value="ADD TO CART" className="btn btn-success ms-3"/>
            </div>
            <p className="text-secondary"><b>Stock: </b>{info.Stock}</p>
            <div>
              <input type="button" value="ADD TO WISHLIST" className="btn"/>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default Product;

const Info = styled.p`
  margin-bottom: 0%;
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

const Remove = styled.input`
  box-shadow: none;

  &:hover{
    box-shadow: none !important;
  }
`;
import React, { useState } from "react";
import styled from "styled-components";
import { Mastercard, Visa, Truck } from "../assets";

const Payment = () => {
  return (
    <Container className="container-fluid col-lg-8 col-md-10 col-11 p-4 m-3 text-light">
      <Title className="d-flex">Payment Method</Title>
      <hr />
      <ol className="ps-0">
          <Card>
            <CardBG className="container-fluid d-flex justify-content-between p-3 bg-light text-dark d-flex mb-3 align-items-center">
              <div className="d-flex align-items-center" >
                <input
                  type="radio"
                  name="mastercard"
                  id="mastercard"
                  className="form-check-input me-3"
                /> 
                <div className="d-flex align-items-center" >
                  <CardImg className="me-3" src={Mastercard}/>
                  <p className="m-0">●●●● 623</p>
                </div>
              </div>
                <p className="text-secondary m-0">Expires 10/25</p>
                <Change
                  className="btn text-danger"
                >
                  REMOVE
                </Change>
            </CardBG>
            <CardBG className="container-fluid d-flex justify-content-between p-3 bg-light text-dark d-flex mb-3 align-items-center">
              <div className="d-flex align-items-center" >
                <input
                  type="radio"
                  name="mastercard"
                  id="mastercard"
                  className="form-check-input me-3"
                /> 
                <div className="d-flex align-items-center" >
                  <CardImg className="me-3" src={Visa}/>
                  <p className="m-0">●●●● 756</p>
                </div>
              </div>
                <p className="text-secondary m-0">Expires 11/24</p>
                <Change
                  className="btn text-danger"
                >
                  REMOVE
                </Change>
            </CardBG>
            <CardBG className="container-fluid d-flex justify-content-between p-3 bg-light text-dark d-flex mb-3 align-items-center">
              <div className="d-flex align-items-center" >
                <input
                  type="radio"
                  name="mastercard"
                  id="mastercard"
                  className="form-check-input me-3"
                /> 
                <div className="d-flex align-items-center" >
                  <CardImg className="me-3" src={Truck}/>
                  <p className="m-0">Cash on Delivery</p>
                </div>
              </div>
            </CardBG>
          </Card>
      </ol>
      <hr />
      <input type="button" value="+ ADD PAYMENT METHOD" className="btn btn-danger shadow-0"/>
    </Container>
  );
};

export default Payment;



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

const Change = styled.button`
  box-shadow: none;

  &:hover{
    box-shadow: none !important;
  }
`;

const CardImg = styled.img`
  width: 2rem;
`
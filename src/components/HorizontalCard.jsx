import React from "react";
import { Styled } from "styled-components";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import horCardData from "./HCardData";

export function HorizontalCardList() {
  return (
    <div>
      {horCardData.map((card) => (
        <MDBCard key={card.id}>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src={card.imageUrl}
                alt={`Card ${card.id}`}
                className="img-fluid"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBCardBody>
                <MDBCardTitle className="mb-3">{card.title}</MDBCardTitle>
                <MDBCardText className="mb-3">{card.content}</MDBCardText>
                <MDBBtn color="danger" href={card.link}>
                  Learn More
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      ))}
      {/*  */}
      <MDBRow className="row-cols-1 row-cols-md-3 m-3">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://images.acer.com/is/image/acer/where-to-buy?$Icon-L$"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="text-center">Where to Buy?</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://images.acer.com/is/image/acer/request-a-quote?$Icon-L$"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="text-center">
                Request a Quote
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://images.acer.com/is/image/acer/channel-partners?$Icon-L$"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="text-center">
                Channel Partners
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <h3 className="text-center m-3">Find a Reseller</h3>
      <p className="text-center m-3">
        No matter where you are in the world, SBytes for Business has the device
        you need. Our global network ensures that you can find our products and
        access our support services at a moment’s notice.
      </p>
    </div>
  );
}

export default HorizontalCardList;
